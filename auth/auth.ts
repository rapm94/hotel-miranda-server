const passport = require('passport');
const localStrategy = require("passport-local").Strategy;
const User = require("../models/user.schema");
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const MagicLinkStrategy = require('passport-magic-link').Strategy;


passport.use("signup", new localStrategy({
    usernameField: "email",
    passwordField: "password",
},
    async (email:string, password: string, done:any) => {
        try {
            const user = await User.findOne({ email: email });
            if (user) {
                return done(null, false, { message: "User already exists" });
            }
            const newUser = await User.create({ email, password });
            return done(null, newUser);
        } catch (error) {
            return done(error);
        }
    }));

    passport.use("login", new localStrategy({
        usernameField: "email",
        passwordField: "password",
    },  async (email:string, password: string, done:any) => {
        try {
            const user = await User.findOne({ email: email });
            if (!user) {
                return done(null, false, { message: "User does not exist" });
            }
            const isMatch = await user.isValidPassword(password);
            if (!isMatch) {
                return done(null, false, { message: "Incorrect password" });
            }
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }));
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    }, async (jwtPayload:any, done:any) => {
        try {
            const user = await User.findById(jwtPayload._id);
            if (!user) {
                return done(null, false);
            }
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }));