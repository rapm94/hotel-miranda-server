"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    roomNumber: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    bedType: {
        type: String,
        required: true
    },
    facilities: {
        type: [String],
    },
    offerPrice: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
});
const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
