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
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const UserControllerPg = {
    getAllUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let users = yield prisma.user.findMany();
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
            let user = yield prisma.user.findOne({
                where: {
                    id: req.params.id
                }
            });
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
            let user = yield prisma.user.create({
                data: req.body
            });
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
            let user = yield prisma.user.update({
                where: {
                    id: req.params.id
                },
                data: req.body
            });
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
            let user = yield prisma.user.delete({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    })
};
module.exports = UserControllerPg;
