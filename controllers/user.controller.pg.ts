import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const UserControllerPg = {
    getAllUsers: async (req: Request, res: Response) => {
        try {
            let users = await prisma.user.findMany();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        } finally {
            await prisma.$disconnect()
          }
    },
    getUserById: async (req: Request, res: Response) => {
        try {
            let user = await prisma.user.findUnique({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        } finally {
            await prisma.$disconnect()
          }
    },
    createUser: async (req: Request, res: Response) => {
        try {
            let user = await prisma.user.create({
                data: req.body
            });
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        } finally {
            await prisma.$disconnect()
          }
    },
    updateUser: async (req: Request, res: Response) => {
        try {
            let user = await prisma.user.update({
                where: {
                    id: req.params.id
                },
                data: req.body
            });
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        } finally {
            await prisma.$disconnect()
          }
    },
    deleteUser: async (req: Request, res: Response) => {
        try {
            let user = await prisma.user.delete({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message 
            });
        } finally {
            await prisma.$disconnect()
          }
    }
};

module.exports = UserControllerPg;
