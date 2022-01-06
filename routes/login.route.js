"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
router.post("/signup", passport.authenticate());
