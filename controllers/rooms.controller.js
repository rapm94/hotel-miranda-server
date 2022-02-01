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
let Room = require('../models/room.schema');
const roomsController = {
    createRoom: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let room = new Room(req.body);
            yield room.save();
            res.status(200).send(room);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }),
    getAllRooms: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let rooms = yield Room.find();
            res.status(200).json(rooms);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }),
    getRoomById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let room = yield Room.findById(req.params.id);
            res.status(200).json(room);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }),
    updateRoom: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let room = yield Room.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(room);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }),
    deleteRoom: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let room = yield Room.findByIdAndDelete(req.params.id);
            res.status(200).json(room);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }),
    getRoomsBeetwenDates: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let rooms = yield Room.find({
                $and: [
                    {
                        $or: [
                            {
                                checkIn: {
                                    $gte: req.body.checkIn,
                                },
                            },
                            {
                                checkOut: {
                                    $lte: req.body.checkOut,
                                },
                            },
                        ],
                    },
                    {
                        $or: [
                            {
                                checkIn: {
                                    $lte: req.body.checkIn,
                                },
                            },
                            {
                                checkOut: {
                                    $gte: req.body.checkOut,
                                },
                            },
                        ],
                    },
                ],
            });
            res.status(200).json(rooms);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }),
};
module.exports = roomsController;
