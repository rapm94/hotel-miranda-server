"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const BookingsControllerPg = {
    getAllBookings: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let bookings = yield prisma.booking.findMany();
            res.status(200).json(bookings);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }),
    getBookingById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let booking = yield prisma.booking.findUnique({
                where: {
                    id: req.params.id,
                },
                include: {
                    room: true,
                },
            });
            res.status(200).json(booking);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }),
    createBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let booking = yield prisma.booking.create({
                data: req.body,
            });
            res.status(201).json(booking);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }),
    updateBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let booking = yield prisma.booking.update({
                where: {
                    id: req.params.id,
                },
                data: req.body,
            });
            res.status(200).json(booking);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }),
    deleteBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let booking = yield prisma.booking.delete({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json(booking);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }),
    // inner join query to get all rooms for a booking
    getBookingRooms: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let bookingRooms = yield prisma.booking.findMany({
                include: {
                    rooms: true,
                },
            });
            res.status(200).json(bookingRooms);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }),
    addARoomToABooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let booking = yield prisma.booking.update({
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
            });
            res.status(200).json(booking);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }),
};
module.exports = BookingsControllerPg;
