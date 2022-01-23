const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/user.schema')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const bcrypt = require('bcrypt')


 passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email: string, password: string, done: any) => {
      try {
        const user = await User.findOne({ email: email })
        if (!user) {
          return done(null, false, { message: 'User not found' })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect password' })
        }
        return done(null, user)
      } catch (error) {
        return done(error)
      }
    }
  ),
) 

 passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwtPayload: any, done: any) => {
      try {
        const user = await User.findById(jwtPayload.uid)
        if (!user) {
          return done(null, false)
        }
        return done(null, user)
      } catch (error) {
        return done(error)
      }
    },
  ),
) 

