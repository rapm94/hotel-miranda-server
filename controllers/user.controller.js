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
let { User } = require('../models/user.schema');
const userController = {
    getAllUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let users = yield User.find();
            res.status(200).json(users);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }),
    getUserById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let user = yield User.findById(req.params.id);
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }),
    createUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let user = new User(req.body);
            yield user.save();
            res.status(201).json(user);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let user = yield User.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }),
    deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let user = yield User.findByIdAndDelete(req.params.id);
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    })
};
module.exports = userController;
