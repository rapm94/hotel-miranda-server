export {}
import { Request, Response, NextFunction } from 'express'
const express = require('express')
const passport = require('passport')
const generateJWT = require('../helpers/generateJWT')

const router = express.Router()

router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req: Request, res: Response, next: NextFunction) => {
    res.json({
      message: 'Signup successful',
      user: req.user,
    })
  },
)

router.post(
  '/login',
  async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('login', async (err: any, user: any) => {
      try {
        if (err || !user) {
          const error = new Error('An error occurred.')

          return next(error)
        }

        req.login(user, { session: false }, async (error) => {
          if (error) return next(error)

          const body = { _id: user._id, email: user.email }
          const token = await generateJWT(body._id)

          return res.json({ token });
        })
      } catch (error) {
        return next(error);
      }
    })(req, res, next);
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
