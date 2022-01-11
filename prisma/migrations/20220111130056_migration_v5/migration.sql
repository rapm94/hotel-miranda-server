/*
  Warnings:

  - You are about to drop the column `photo` on the `Review` table. All the data in the column will be lost.
  - Made the column `updatedAt` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `subget` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Made the column `updatedAt` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "photo",
ADD COLUMN     "subget" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "updatedAt" SET NOT NULL;
