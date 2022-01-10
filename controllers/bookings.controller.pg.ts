import { Request , Response } from 'express';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const BookingsControllerPg = {
    getAllBookings: async (req: Request, res: Response) => {
        try {
            let bookings = await prisma.booking.findMany();
            res.status(200).json(bookings);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        }
    },
    getBookingById: async (req: Request, res: Response) => {
        try {
            let booking = await prisma.booking.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(booking);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    },
    createBooking: async (req: Request, res: Response) => {
        try {
            let booking = await prisma.booking.create({
                data: req.body
            });
            res.status(201).json(booking);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        }
    },
    updateBooking: async (req: Request, res: Response) => {
        try {
            let booking = await prisma.booking.update({
                where: {
                    id: req.params.id
                },
                data: req.body
            });
            res.status(200).json(booking);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    },
    deleteBooking: async (req: Request, res: Response) => {
        try {
            let booking = await prisma.booking.delete({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(booking);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    },
    // inner join query to get all rooms for a booking
    getBookingRooms: async (req: Request, res: Response) => {
        try {
            let bookingRooms = await prisma.booking.findMany({
                include: {
                    rooms: true
                }
            });
            res.status(200).json(bookingRooms);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    }
};

exports.module = BookingsControllerPg;