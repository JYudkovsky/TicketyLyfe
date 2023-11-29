const { ServerError } = require("../errors");
const prisma = require("../prisma");

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
    const allUsersWithTickets = await prisma.user.findMany({
      include: {
        tickets: true,
      },
    });
    console.dir(allUsersWithTickets, { depth: null });

    res.json(allUsersWithTickets);
    console.log(allUsersWithTickets);
  } catch (err) {
    next(err);
  }
});
