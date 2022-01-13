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
const { roomSchema } = require('../helpers/validate.schema');
const prisma = new PrismaClient();
const RoomsControllerPg = {
    getAllRooms: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let rooms = yield prisma.room.findMany();
            res.status(200).json(rooms);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
    getRoomById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let room = yield prisma.room.findUnique({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(room);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
    createRoom: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const validRoom = yield roomSchema.validateAsync(req.body);
            let room = yield prisma.room.create({
                data: req.body
            });
            res.status(201).json(room);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
    updateRoom: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const validRoom = yield roomSchema.validateAsync(req.body);
            let room = yield prisma.room.update({
                where: {
                    id: req.params.id
                },
                data: validRoom
            });
            res.status(200).json(room);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
    deleteRoom: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let room = yield prisma.room.delete({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(room);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    })
};
module.exports = RoomsControllerPg;
