import { Request, Response } from 'express'
let express = require('express')
let router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.render('index', {
    title: 'Home',
  })
})

router.get('/about', (req: Request, res: Response) => {
  res.render('about-us', {
    title: 'About',
  })
})

router.get('/contact', (req: Request, res: Response) => {
  res.render('contact', {
    title: 'Contact',
  })
})

router.get('/room-list', (req: Request, res: Response) => {
  res.render('room-list'), {
    title: 'Room List',
  }
})

router.get('/room-offers', (req: Request, res: Response) => {
  res.render('room-offers'),{
    title: 'Room Offers',
  }
})

router.get('/room-details', (req: Request, res: Response) => {
  res.render('room-details'),{
    title: 'Room Details',
  }
})
module.exports = router
