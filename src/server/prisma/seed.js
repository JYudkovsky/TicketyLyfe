const prisma = require("../prisma");

const seed = async () => {
  try {
    await prisma.user.create({
      data: {
        firstName: "Maximus",
        lastName: "Prime",
        email: "piedpipper@hooli.com",
        username: "Max",
        password: "1234",
        tickets: {
          create: [
            {
              // ticket: {
              eventName: "Concert",
              // userId: 1,
              dateTime: new Date("2023-12-10T19:00:00"),
              location: "Capitol Theatre, Port Chester, NY",
              description: "Live music performance",
              seatSection: "A12",
              price: 50,
              // },
            },
            {
              // ticket: {
              eventName: "Sports Event",
              // userId: 2,
              dateTime: new Date("2024-01-05T15:30:00"),
              location: "Fenway Park, Boston, MA",
              description: "Baseball game",
              seatSection: "B5",
              price: 35,
              // },
            },
            {
              // ticket: {
              eventName: "Theater Show",
              // userId: 3,
              dateTime: new Date("2023-12-22T18:45:00"),
              location: "New York City Theater, Manhattan, NY",
              description: "Drama performance",
              seatSection: "C8",
              price: 70,
              // },
            },
            {
              // ticket: {
              eventName: "Comedy Night",
              // userId: 4,
              dateTime: new Date("2024-02-15T20:00:00"),
              location: "New York Comedy Club, Manhattan, NY",
              description: "Stand-up comedy",
              seatSection: "D20",
              price: 45,
              // },
            },
            {
              // ticket: {
              eventName: "Movie Premiere",
              // userId: 5,
              dateTime: new Date("2023-12-31T21:00:00"),
              location: "AMC Theaters, Port Chester, NY",
              description: "Exclusive movie screening",
              seatSection: "E15",
              price: 25,
              // },
            },
          ],
        },
      },
    });
    console.log("Tickets seeded successfully!");
  } catch (err) {
    console.error("Error seeding tickets:", err);
  } finally {
    await prisma.$disconnect();
  }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
