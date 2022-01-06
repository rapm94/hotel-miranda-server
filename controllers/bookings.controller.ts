import { Request, Response } from 'express';
let { Booking } = require('../models/booking.schema');

const bookingController = {
    getAllBookings: async (req: Request, res: Response) => {
        try {
            let bookings = await Booking.find();
            res.status(200).json(bookings);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        }
    }, 
    getBookingById: async (req: Request, res: Response) => {
        try {
            let booking = await Booking.findById(req.params.id);
            res.status(200).json(booking);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    },
    createBooking: async (req: Request, res: Response) => {
        try {
            let booking = new Booking(req.body);
            await booking.save();
            res.status(201).json(booking);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        }
    },
    updateBooking: async (req: Request, res: Response) => {
        try {
            let booking = await Booking.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(booking);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    },
    deleteBooking: async (req: Request, res: Response) => {
        try {
            let booking = await Booking.findByIdAndDelete(req.params.id);
            res.status(200).json(booking);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message 
            });
        }
    }
};

module.exports = bookingController;