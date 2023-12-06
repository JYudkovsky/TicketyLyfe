-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "eventName" TEXT NOT NULL,
    "dateTime" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "seatSection" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL DEFAULT 'blank_image',
    "price" INTEGER NOT NULL,
    "sellerId" INTEGER NOT NULL,
    "buyerId" INTEGER,
    CONSTRAINT "Ticket_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Ticket_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
