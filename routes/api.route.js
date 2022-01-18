"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
let roomsController = require('../controllers/rooms.controller');
let bookingController = require('../controllers/bookings.controller');
let reviewController = require('../controllers/review.controller');
let userController = require('../controllers/user.controller');
router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API',
        user: req.user,
        token: req.query.token,
    });
});
//Rooms route
router
    .route('/rooms')
    .get(roomsController.getAllRooms)
    .post(roomsController.createRoom);
router
    .route('/rooms/:id')
    .get(roomsController.getRoomById)
    .put(roomsController.updateRoom)
    .delete(roomsController.deleteRoom);
//reviews route
router
    .route('/reviews')
    .post(reviewController.createReview)
    .get(reviewController.getAllReviews);
router
    .route('/reviews/:id')
    .get(reviewController.getReviewById)
    .delete(reviewController.deleteReview);
router
    .route('/users')
    .get(userController.getAllUsers)
    .post(userController.createUser);
router
    .route('/users/:id')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser);
router
    .route('/bookings')
    .get(bookingController.getAllBookings)
    .post(bookingController.createBooking);
router
    .route('/bookings/:id')
    .get(bookingController.getBookingById)
    .put(bookingController.updateBooking)
    .delete(bookingController.deleteBooking);
module.exports = router;
