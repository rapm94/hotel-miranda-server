const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import { ReviewI } from "../types/reviews.interface";

const reviewSchema:ReviewI = new Schema({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    subget: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;