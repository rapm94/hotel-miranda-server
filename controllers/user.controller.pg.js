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
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
const { userSchema } = require('../helpers/validate.schema');
const UserControllerPg = {
    getAllUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let users = yield prisma.user.findMany();
            res.status(200).json(users);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
    getUserById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let user = yield prisma.user.findUnique({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
    createUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const validUser = yield userSchema.validateAsync(req.body);
            const hashedPassword = yield bcrypt.hash(validUser.password, 10);
            let user = yield prisma.user.create({
                data: Object.assign(Object.assign({}, validUser), { password: hashedPassword })
            });
            res.status(201).json(user);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const validUser = yield userSchema.validateAsync(req.body);
            const hashedPassword = yield bcrypt.hash(validUser.password, 10);
            let user = yield prisma.user.update({
                where: {
                    id: req.params.id,
                },
                data: Object.assign(Object.assign({}, validUser), { password: hashedPassword }),
            });
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
    deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let user = yield prisma.user.delete({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
};
module.exports = UserControllerPg;
