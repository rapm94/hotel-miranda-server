const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import { UserI } from "../types/user.types";


const userSchema:UserI = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    jwt: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;