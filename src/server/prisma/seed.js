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
        selling: {
          create: [
            {
              eventName: "Concert",
              dateTime: new Date("2023-12-10T19:00:00"),
              location: "Capitol Theatre, Port Chester, NY",
              description: "Live music performance",
              seatSection: "A12",
              price: 50,
            },
            {
              eventName: "Sports Event",
              dateTime: new Date("2024-01-05T15:30:00"),
              location: "Fenway Park, Boston, MA",
              description: "Baseball game",
              seatSection: "B5",
              price: 35,
            },
            {
              eventName: "Theater Show",
              dateTime: new Date("2023-12-22T18:45:00"),
              location: "New York City Theater, Manhattan, NY",
              description: "Drama performance",
              seatSection: "C8",
              price: 70,
            },
            {
              eventName: "Comedy Night",
              dateTime: new Date("2024-02-15T20:00:00"),
              location: "New York Comedy Club, Manhattan, NY",
              description: "Stand-up comedy",
              seatSection: "D20",
              price: 45,
            },
            {
              eventName: "Movie Premiere",
              dateTime: new Date("2023-12-31T21:00:00"),
              location: "AMC Theaters, Port Chester, NY",
              description: "Exclusive movie screening",
              seatSection: "E15",
              price: 25,
            },
          ],
        },
      },
    });

    await prisma.user.create({
      data: {
        firstName: "David",
        lastName: "Andrews",
        email: "hothoney@gmail.com",
        username: "Android7",
        password: "qwer",
        selling: {
          create: [
            {
              eventName: "Art Exhibition",
              dateTime: new Date("2023-11-20T10:00:00"),
              location: "Metropolitan Museum of Art, New York, NY",
              description: "Showcasing modern art pieces",
              seatSection: "Exhibition Hall A",
              price: 20,
            },
            {
              eventName: "Tech Conference",
              dateTime: new Date("2024-03-15T09:00:00"),
              location: "Moscone Center, San Francisco, CA",
              description: "Keynote speeches on latest technology trends",
              seatSection: "Conference Room B",
              price: 100,
            },
            {
              eventName: "Food Festival",
              dateTime: new Date("2023-09-28T12:00:00"),
              location: "Central Park, New York, NY",
              description: "Celebrating diverse cuisines with live music",
              seatSection: "Tasting Pavilion",
              price: 30,
            },
            {
              eventName: "Science Fair",
              dateTime: new Date("2024-05-05T10:00:00"),
              location: "Science Museum, London, UK",
              description: "Students' innovative science projects on display",
              seatSection: "Experiment Zone",
              price: 15,
            },
            {
              eventName: "Fashion Show",
              dateTime: new Date("2023-10-10T18:30:00"),
              location: "Paris Fashion Week, Paris, France",
              description: "High-end designer collections on the runway",
              seatSection: "Front Row",
              price: 80,
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
