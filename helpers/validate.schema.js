"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//-----------------------------------------------------------------------------
const UserI = require('../types/user.interface');
const RoomI = require('../types/rooms.interface');
const BookingI = require('../types/bookings.interface');
const ReviewI = require('../types/reviews.interface');
const AuthI = require('../types/auth.interface');
const joi = require('joi');
const userSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    phone: joi.string().required(),
    jobDescription: joi.string().required(),
    status: joi.boolean().required(),
});
const bookingSchema = joi.object().keys({
    userId: joi.string().required(),
    roomId: joi.string().required(),
    startDate: joi.date().required(),
    endDate: joi.date().required(),
    status: joi.boolean().required(),
});
const reviewSchema = joi.object().keys({
    userId: joi.string().required(),
    roomId: joi.string().required(),
    review: joi.string().required(),
    rating: joi.number().required(),
});
const roomSchema = joi.object().keys({
    name: joi.string().required(),
    roomNumber: joi.number().required(),
    price: joi.number().required(),
    bedType: joi.string().required(),
    facilities: joi.array().required(),
    offerPrice: joi.number().required(),
    status: joi.boolean().required(),
});
const authSchema = joi.object().keys({
    email: joi.string().email().lowercase().required(),
    password: joi.string().required().min(4),
});
module.exports = {
    userSchema,
    bookingSchema,
    reviewSchema,
    roomSchema,
    authSchema,
};
