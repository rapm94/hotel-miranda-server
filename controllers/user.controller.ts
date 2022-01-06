import { Request, Response } from 'express';
let { User } = require('../models/user.schema');


const userController = {
    getAllUsers: async (req: Request, res: Response) => {
        try {
            let users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        }
    }, 
    getUserById: async (req: Request, res: Response) => {
        try {
            let user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    },
    createUser: async (req: Request, res: Response) => {
        try {
            let user = new User(req.body);
            await user.save();
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        }
    },
    updateUser: async (req: Request, res: Response) => {
        try {
            let user = await User.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    },
    deleteUser: async (req: Request, res: Response) => {
        try {
            let user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message 
            });
        }
    }
};

module.exports = userController;