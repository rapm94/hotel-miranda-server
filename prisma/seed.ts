import { PrismaClient } from '@prisma/client'
import { bookingsData } from './seedingData/bookings' 
import { reviewsData } from './seedingData/reviews'
import { roomsData } from './seedingData/rooms'
import { userData } from './seedingData/users'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding data...')

  for (const review of reviewsData) {
    await prisma.review.upsert({
      where: {
        id: review.id
      },
      create: review,
      update: review
    })
  }
  for (const room of roomsData) {
    await prisma.room.upsert({
      where: {
        id: room.id
      },
      create: room,
      update: room
    })
  }
  for (const booking of bookingsData) {
    await prisma.booking.create({
      data: booking
    })
  }  
  for (const user of userData) {
    await prisma.user.upsert({
      where: {
        id: user.id
      },
      create: user,
      update: user
    })
  }

}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
    console.log('Done!')
  })
