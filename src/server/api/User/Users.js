const { ServerError } = require("../../errors");
const prisma = require("../../prisma");

const router = require("express").Router();
module.exports = router;

/** User must be logged in to access tasks. */
// router.use((req, res, next) => {
//   if (!res.locals.user) {
//     return next(new ServerError(401, "You must be logged in."));
//   }
//   next();
// });

router.get("/", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    next(err);
  }
});


router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const user = await prisma.user.findUnique({ where: { id } });
    validateTicket(res.locals.user, user);

    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/buy-ticket/:ticketId', async (req, res) => {
  const { ticketId } = req.params;
  const { buyerId } = req.locals.user.id; // Assuming you're sending the buyer's user ID in the request body
  
  try {
    // Find the ticket by ID
    const ticket = await prisma.ticket.findUnique({
      where: {
        id: parseInt(ticketId),
      },
    });

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    // Assuming 'userId' is the field in your 'Ticket' model that represents the ticket owner's ID
    if (ticket.userId === buyerId) {
      return res.status(400).json({ error: 'You cannot buy your own ticket' });
    }

    // Update the ticket's owner ID to the buyer's ID
    const updatedTicket = await prisma.ticket.update({
      where: {
        id: parseInt(ticketId),
      },
      data: {
        userId: buyerId,
      },
    });

    return res.status(200).json(updatedTicket);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/sell-ticket', async (req, res) => {
  const { eventName, dateTime, description, location, seatSection, imageUrl, price } = req.body;
  const sellerId = res.locals.user.id;

  try {
    // Create a new ticket and associate it with the user (assuming 'userId' is provided in the request body)
    const newTicket = await prisma.ticket.create({
      data: {
        eventName,
        dateTime,
        description,
        location,
        seatSection,
        imageUrl,
        price,
        userId: sellerId // Associate the ticket with the user selling it
      },
    });

    return res.status(201).json(newTicket);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const ticket = await prisma.ticket.findUnique({ where: { id } });
    validateTicket(res.locals.user, ticket, next);

    await prisma.ticket.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
