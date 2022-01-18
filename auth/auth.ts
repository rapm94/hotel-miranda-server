const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const { PrismaClient} = require('@prisma/client')
const bcrypt = require('bcrypt')
 
const prisma = new PrismaClient()


passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email: string, password: string, done: any) => {
      try {
        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        })
        if (!user) {
          return done(null, false, { message: 'User not found' })
        }
        const isMatch = await bcrypt.compareSync(password, user.password)
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect password' })
        }
        return done(null, user)
      } catch (error) {
        return done(error)
      }finally{
        prisma.$disconnect()
      }
    },
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
        const user = await prisma.user.findUnique({
          where: {
            email: jwtPayload.uid.email,
          },
        })
        if (!user) {
          return done(null, false)
        }
        return done(null, user)
      } catch (error) {
        return done(error)
      }finally{
        prisma.$disconnect()
      }
    },
  ),
)
