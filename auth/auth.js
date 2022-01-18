"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user.schema');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
//const { PrismaClient} = require('@prisma/client')
const bcrypt = require('bcrypt');
//const prisma = new PrismaClient()
/*  passport.use(
  'signup',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email: string, password: string, done: any) => {
      try {
        const user = await User.findOne({ email: email })
        if (user) {
          return done(null, false, { message: 'User already exists' })
        }
        const newUser = await User.create({ email, password })
        return done(null, newUser)
      } catch (error) {
        return done(error)
      }
    },
  ),
) */
passport.use('login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findOne({ email: email });
        if (!user) {
            return done(null, false, { message: 'User not found' });
        }
        const isMatch = yield bcrypt.compare(password, user.password);
        if (!isMatch) {
            return done(null, false, { message: 'Incorrect password' });
        }
        return done(null, user);
    }
    catch (error) {
        return done(error);
    }
})));
passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}, (jwtPayload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findById(jwtPayload.uid);
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    }
    catch (error) {
        return done(error);
    }
})));
/* passport.use(
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
) */
