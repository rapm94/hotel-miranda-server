import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const RoomsControllerPg = {
    getAllRooms: async (req: Request, res: Response) => {
        try {
            let rooms = await prisma.room.findMany();
            res.status(200).json(rooms);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        }
    },
    getRoomById: async (req: Request, res: Response) => {
        try {
            let room = await prisma.room.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(room);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    },
    createRoom: async (req: Request, res: Response) => {
        try {
            let room = await prisma.room.create({
                data: req.body
            });
            res.status(201).json(room);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        }
    },
    updateRoom: async (req: Request, res: Response) => {
        try {
            let room = await prisma.room.update({
                where: {
                    id: req.params.id
                },
                data: req.body
            });
            res.status(200).json(room);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    },
    deleteRoom: async (req: Request, res: Response) => {
        try {
            let room = await prisma.room.delete({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(room);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    }
};

exports.module = RoomsControllerPg; 