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
let { Booking } = require('../models/booking.schema');
const bookingController = {
    getAllBookings: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let bookings = yield Booking.find();
            res.status(200).json(bookings);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }),
    getBookingById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let booking = yield Booking.findById(req.params.id);
            res.status(200).json(booking);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }),
    createBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let booking = new Booking(req.body);
            yield booking.save();
            res.status(201).json(booking);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }),
    updateBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let booking = yield Booking.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(booking);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }),
    deleteBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let booking = yield Booking.findByIdAndDelete(req.params.id);
            res.status(200).json(booking);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    })
};
module.exports = bookingController;
