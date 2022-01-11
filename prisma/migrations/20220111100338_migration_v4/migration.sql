/*
  Warnings:

  - You are about to drop the column `jwtToken` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "checkOut" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "rating" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Room" ALTER COLUMN "offerPrice" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "jwtToken",
ALTER COLUMN "updatedAt" DROP NOT NULL;
