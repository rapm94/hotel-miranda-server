const passport = require('passport');
const passwordlessStrategy = require("passport-passwordless").Strategy;
const User = require("../models/user");
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use("signup", new passwordlessStrategy({
    // this is the url you will use to request the token
    allowTokenReuse: true,
    // this is the secret you will use to verify the token