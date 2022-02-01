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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const passport = require('passport');
const generateJWT = require('../helpers/generateJWT');
const router = express.Router();
/* router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req: Request, res: Response, next: NextFunction) => {

    res.json({
      message: 'Signup successful',
      user: req.user,
    })
  },
) */
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        message: "Welcome to auth route",
    });
}));
router.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    passport.authenticate('login', (err, user, info) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                message: info.message,
            });
        }
        const token = yield generateJWT(user);
        return res.status(200).json({
            message: 'Login successful',
            user,
            token,
        });
    }))(req, res, next);
}));
let logout = (req, res, next) => {
    req.logout();
    res.sendStatus(200);
};
router.post('/logout', logout, function (req, res, next) {
    next();
});
module.exports = router;
