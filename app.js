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
require("dotenv").config();
require("./auth/auth");
function dbConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose.connect(process.env.DB_CNN, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Connected to database');
        }
        catch (err) {
            console.log(err);
        }
    });
}
;
dbConnection();
let webRouter = require("./routes/web.route");
let apiRouter = require('./routes/api.route');
let loginRouter = require('./routes/login.route');
const app = (0, express_1.default)();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(logger('dev'));
app.use("/", webRouter);
app.use("/api", passport.authenticate("jwt", { session: false }), apiRouter);
app.use("/login", loginRouter);
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
