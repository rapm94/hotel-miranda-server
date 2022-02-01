import express, { Request, Response, Application } from 'express'
let path = require('path')
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')
let session = require('express-session')
let passport = require('passport')
let logger = require('morgan')
let createError = require('http-errors')
let cors = require('cors')
let mongoose = require('mongoose')
require('dotenv').config()
require('./auth/auth')

//DB Connection

require("./db/mongo.config").dbConnection();


var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  exposedHeaders: "*",
  allowedHeaders: "*",
}

let webRouter = require('./routes/web.route')
let apiRouter = require('./routes/api.route')
let loginRouter = require('./routes/login.route')

const app: Application = express()
app.use(cors(corsOptions))
app.options('*', cors(corsOptions))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(cookieParser())
app.use(logger('dev'))
app.use('/', webRouter)
app.use('/api', passport.authenticate('jwt', { session: false }), apiRouter)
app.use('/auth', loginRouter)

app.use(function (req: Request, res: Response, next: Function) {
  next(createError(404))
})

app.use(function (err: any, req: Request, res: Response, next: Function) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
