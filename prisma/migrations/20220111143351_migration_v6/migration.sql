/*
  Warnings:

  - You are about to drop the column `guest` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `roomNumber` on the `Booking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "guest",
DROP COLUMN "roomNumber",
ALTER COLUMN "updatedAt" DROP NOT NULL;
