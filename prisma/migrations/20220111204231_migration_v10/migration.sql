/*
  Warnings:

  - You are about to drop the column `roomNumber` on the `Room` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Room_roomNumber_key";

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "roomNumber";
