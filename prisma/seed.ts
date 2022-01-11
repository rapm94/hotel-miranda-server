import { PrismaClient } from '@prisma/client'
import { bookingsData } from './seedingData/bookings'
import { reviewsData } from './seedingData/reviews'
import { roomsData } from './seedingData/rooms'
import { userData } from './seedingData/users'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding data...')

  for (const review of reviewsData) {
    await prisma.review.createMany({
      data: review,
    })
  }
  for (const room of roomsData) {
    await prisma.room.createMany({
      data: room,
    })
  }
  for (const user of userData) {
    await prisma.user.createMany({
      data: user,
    })
  }
/*   for (const booking of bookingsData) {
    await prisma.booking.createMany({
      data: booking,
    })
  } */
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
    console.log('Done!')
  })
