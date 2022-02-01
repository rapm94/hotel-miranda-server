export {}
import { Request, Response, NextFunction } from 'express'
const express = require('express')
const passport = require('passport')
const generateJWT = require('../helpers/generateJWT')
const router = express.Router()

/* router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req: Request, res: Response, next: NextFunction) => {

    res.json({
      message: 'Signup successful',
      user: req.user,
    })
  },
) */

router.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    res.json({
      message: "Welcome to auth route",
    })
  }
)

router.post(
  '/login',
async (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('login', async (err: Error, user: any, info: any) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.status(401).json({
        message: info.message,
      })
    }
    const token = await generateJWT(user)
    return res.status(200).json({
      message: 'Login successful',
      user,
      token,
    })
  })(req, res, next)
},
)

let logout:Function = (req: Request, res: Response, next: NextFunction) => {
    req.logout();
    res.sendStatus(200);
}

router.post(
  '/logout', logout , function (req: Request, res: Response, next: NextFunction) {
    next()
  },
)

module.exports = router
