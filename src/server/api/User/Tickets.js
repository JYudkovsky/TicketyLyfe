const { ServerError } = require("../../errors");
const prisma = require("../../prisma");

const router = require("express").Router();
module.exports = router;

router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    console.log("Received ID:", id); // Add this line for debugging

    const ticket = await prisma.ticket.findUnique({ where: { id } });
    console.log("Retrieved Ticket:", ticket); // Add this line for debugging

    res.json(ticket);
  } catch (err) {
    console.error("Error retrieving ticket:", err); // Add this line for debugging
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const tickets = await prisma.ticket.findMany();

    res.json(tickets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "You must be logged in."));
  }
  next();
});

router.post("/", async (req, res, next) => {
  try {
    const {
      eventName,
      location,
      dateTime,
      description,
      seatSection,
      sellerId,
    } = req.body;
    if (!eventName || !location || !dateTime) {
      const error = {
        status: 400,
        message: "Must provide Event Name, Location, and a Date and Time.",
      };
      return next(error);
    }
    const newEvent = await prisma.ticket.create({
      data: {
        eventName: eventName,
        location: location,
        dateTime: dateTime,
        description: description,
        seatSection: seatSection,
        sellerId: sellerId,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(newEvent);
  } catch (err) {
    next(err);
  }
});

const validateTicket = (user, ticket, next) => {
  if (!ticket) {
    const error = {
      status: 404,
      message: "Ticket not found.",
    };
    return next(error);
  }
  if (ticket.userId !== user.id) {
    const error = {
      status: 403,
      message: "This ticket does not belong to you.",
    };
    return next(error);
  }
};

router.put("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { eventName, location, dateTime, description, seatSection } =
      req.body;

    const ticket = await prisma.ticket.findUnique({ where: { id } });
    validateTicket(res.locals.user, ticket);

    const updatedTicket = await prisma.ticket.update({
      where: { id },
      data: { eventName, location, dateTime, description, seatSection },
    });
    res.json(updatedTicket);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const ticket = await prisma.ticket.findUnique({ where: { id: id } });
    validateTicket(res.locals.user, ticket);

    await prisma.ticket.delete({ where: { id: id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
