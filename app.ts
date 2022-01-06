import express, { Request, Response, Application} from 'express';
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let passport = require('passport');
let logger = require('morgan');
let createError = require('http-errors');
let cors = require('cors');
let mongoose  = require('mongoose');
require ("dotenv").config();

async function dbConnection () {
    try{
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
            console.log('Connected to database');

    } catch (err) {
        console.log(err);
    }
    
  };

dbConnection();

const User = require("./models/user.schema");


const app: Application = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(logger('dev'));



module.exports = app;