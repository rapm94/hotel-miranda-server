import express, { Request, Response, Application} from 'express';
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let passport = require('passport');
let logger = require('morgan');
let createError = require('http-errors');
let cors = require('cors');

require ("dotenv").config();
require ("./database/config");
const User = require('./models/User');

const app: Application = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(logger('dev'));



app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port:', process.env.PORT);
});

module.exports = app;