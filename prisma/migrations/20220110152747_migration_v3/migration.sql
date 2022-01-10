/*
  Warnings:

  - You are about to drop the column `bookingId` on the `Room` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[roomId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[roomNumber]` on the table `Room` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roomNumber` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_bookingId_fkey";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "roomNumber" TEXT NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "photo" TEXT;

-- AlterTable
CREATE SEQUENCE "room_roomnumber_seq";
ALTER TABLE "Room" DROP COLUMN "bookingId",
ALTER COLUMN "roomNumber" SET DEFAULT nextval('room_roomnumber_seq');
ALTER SEQUENCE "room_roomnumber_seq" OWNED BY "Room"."roomNumber";

-- CreateIndex
CREATE UNIQUE INDEX "Booking_roomId_key" ON "Booking"("roomId");

-- CreateIndex
CREATE UNIQUE INDEX "Room_roomNumber_key" ON "Room"("roomNumber");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
