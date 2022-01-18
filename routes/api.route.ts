export {}
import { Router, Request, Response } from 'express'
const express = require('express')
let  RoomsControllerPg  = require('../controllers/rooms.controller.pg')
let  BookingsControllerPg  = require('../controllers/bookings.controller.pg')
let  ReviewControllerPg  = require('../controllers/review.controller.pg')
let  UserControllerPg  = require('../controllers/user.controller.pg')


const router:Router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to the API',
    user: req.user,
    token: req.query.token,
  })
})
//Rooms route
router
  .route('/rooms')
  .get(RoomsControllerPg.getAllRooms)
  .post(RoomsControllerPg.createRoom)

router
  .route('/rooms/:id')
  .get(RoomsControllerPg.getRoomById)
  .put(RoomsControllerPg.updateRoom)
  .delete(RoomsControllerPg.deleteRoom)
//reviews route
router
  .route('/reviews')
  .post(ReviewControllerPg.createReview)
  .get(ReviewControllerPg.getAllReviews)
router
  .route('/reviews/:id')
  .get(ReviewControllerPg.getReviewById)
  .delete(ReviewControllerPg.deleteReview)
router
  .route('/users')
  .get(UserControllerPg.getAllUsers)
  .post(UserControllerPg.createUser)
router
  .route('/users/:id')
  .get(UserControllerPg.getUserById)
  .put(UserControllerPg.updateUser)
  .delete(UserControllerPg.deleteUser)

router
  .route('/bookings')
  .get(BookingsControllerPg.getAllBookings)
  .post(BookingsControllerPg.createBooking)
router
  .route('/bookings/:id')
  .get(BookingsControllerPg.getBookingById)
  .put(BookingsControllerPg.updateBooking)
  .delete(BookingsControllerPg.deleteBooking)


module.exports = router;
