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
router.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    passport.authenticate('login', (err, user) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (err || !user) {
                const error = new Error('An error occurred.');
                return next(error);
            }
            req.login(user, { session: false }, (error) => __awaiter(void 0, void 0, void 0, function* () {
                if (error)
                    return next(error);
                const body = { _id: user._id, email: user.email };
                const token = yield generateJWT(body._id);
                return res.json({ token });
            }));
        }
        catch (error) {
            return next(error);
        }
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
