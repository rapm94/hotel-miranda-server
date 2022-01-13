import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
const { roomSchema } = require('../helpers/validate.schema');

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
        } finally {
            await prisma.$disconnect()
          }
    },
    getRoomById: async (req: Request, res: Response) => {
        try {
            let room = await prisma.room.findUnique({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(room);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        } finally {
            await prisma.$disconnect()
          }
    },
    createRoom: async (req: Request, res: Response) => {
        try {
            const validRoom = await roomSchema.validateAsync(req.body);
            let room = await prisma.room.create({
                data: req.body
            });
            res.status(201).json(room);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        } finally {
            await prisma.$disconnect()
          }
    },
    updateRoom: async (req: Request, res: Response) => {
        try {
            const validRoom = await roomSchema.validateAsync(req.body);
            let room = await prisma.room.update({
                where: {
                    id: req.params.id
                },
                data: validRoom
            });
            res.status(200).json(room);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        } finally {
            await prisma.$disconnect()
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
        } finally {
            await prisma.$disconnect()
          }
    }
};

module.exports = RoomsControllerPg; 