"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let passport = require('passport');
let logger = require('morgan');
let createError = require('http-errors');
let cors = require('cors');
let mongoose = require('mongoose');
require('dotenv').config();
require('./auth/auth');
//DB Connection
require("./db/mongo.config").dbConnection();
var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    exposedHeaders: "*",
    allowedHeaders: "*",
};
let webRouter = require('./routes/web.route');
let apiRouter = require('./routes/api.route');
let loginRouter = require('./routes/login.route');
const app = (0, express_1.default)();
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cookieParser());
app.use(logger('dev'));
app.use('/', webRouter);
app.use('/api', passport.authenticate('jwt', { session: false }), apiRouter);
app.use('/auth', loginRouter);
app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
