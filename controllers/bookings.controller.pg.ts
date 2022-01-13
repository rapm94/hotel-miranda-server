import { Request, Response } from 'express'
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const BookingsControllerPg = {
  getAllBookings: async (req: Request, res: Response) => {
    try {
      let bookings = await prisma.booking.findMany()
      res.status(200).json(bookings)
    } catch (err) {
      res.status(500).json({
        message: (err as Error).message,
      })
    } finally {
      await prisma.$disconnect()
    }
  },
  getBookingById: async (req: Request, res: Response) => {
    try {
      let booking = await prisma.booking.findUnique({
        where: {
          id: req.params.id,
        },
        include: {
          room: true,
        },
      })
      res.status(200).json(booking)
    } catch (err) {
      res.status(500).json({
        message: (err as Error).message,
      })
    } finally {
      await prisma.$disconnect()
    }
  },
  createBooking: async (req: Request, res: Response) => {
    try {
      let booking = await prisma.booking.create({
        data: req.body,
      })
      res.status(201).json(booking)
    } catch (err) {
      res.status(500).json({
        message: (err as Error).message,
      })
    } finally {
      await prisma.$disconnect()
    }
  },
  updateBooking: async (req: Request, res: Response) => {
    try {
      let booking = await prisma.booking.update({
        where: {
          id: req.params.id,
        },
        data: req.body,
      })
      res.status(200).json(booking)
    } catch (err) {
      res.status(500).json({
        message: (err as Error).message,
      })
    } finally {
      await prisma.$disconnect()
    }
  },
  deleteBooking: async (req: Request, res: Response) => {
    try {
      let booking = await prisma.booking.delete({
        where: {
          id: req.params.id,
        },
      })
      res.status(200).json(booking)
    } catch (err) {
      res.status(500).json({
        message: (err as Error).message,
      })
    } finally {
      await prisma.$disconnect()
    }
  },
  // inner join query to get all rooms for a booking
  getBookingRooms: async (req: Request, res: Response) => {
    try {
      let bookingRooms = await prisma.booking.findMany({
        include: {
          rooms: true,
        },
      })
      res.status(200).json(bookingRooms)
    } catch (err) {
      res.status(500).json({
        message: (err as Error).message,
      })
    } finally {
      await prisma.$disconnect()
    }
  },
  addARoomToABooking: async (req: Request, res: Response) => {
    try {
      let booking = await prisma.booking.update({
        where: {
          id: req.params.id,
        },
        data: {
          rooms: {
            connect: {
              id: req.params.roomId,
            },
          },
        },
      })
      res.status(200).json(booking)
    } catch (err) {
      res.status(500).json({
        message: (err as Error).message,
      })
    } finally {
      await prisma.$disconnect()
    }
  },
}

module.exports = BookingsControllerPg
