
export{}
let  Room  = require('../models/room.schema');
import { Request, Response } from 'express';

const roomsController = {
    createRoom: async (req: Request, res: Response) => {
        try {
            let room = new Room(req.body);
            await room.save();
            res.status(200).send(room);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    getAllRooms: async (req:Request, res:Response) => {
        try {
            let rooms = await Room.find();
            res.status(200).json(rooms);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        }
    },
    getRoomById: async (req:Request, res:Response) => {
        try {
            let room = await Room.findById(req.params.id);
            res.status(200).json(room);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    },
    updateRoom: async (req:Request, res:Response) => {
        try {
            let room = await Room.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(room);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    },
    deleteRoom: async (req:Request, res:Response) => {
        try {
            let room = await Room.findByIdAndDelete(req.params.id);
            res.status(200).json(room);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message 
            });
        }
    }
};
module.exports = roomsController;
