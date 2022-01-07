const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import { BookingI } from "../types/bookings.types";

const bookingSchema:BookingI = new Schema({
    userId: {
        type: String,
        required: true
    },
    roomId: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    status: {
        type: Boolean,
        required: true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
