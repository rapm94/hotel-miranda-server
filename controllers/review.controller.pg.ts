import { Request, Response } from 'express';
import  {PrismaClient}  from '@prisma/client';


const prisma = new PrismaClient();

const ReviewControllerPg = {
    getAllReviews: async (req: Request, res: Response) => {
        try {
            let reviews = await prisma.review.findMany();
            res.status(200).json(reviews);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
            console.log(err);
        }
    },
    getReviewById: async (req: Request, res: Response) => {
        try {
            let review = await prisma.review.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(review);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
            console.log(err);
        }
    },
    createReview: async (req: Request, res: Response) => {
        try {
            let review = await prisma.review.create({
                data: req.body
            });
            res.status(201).json(review);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        }
    },
    updateReview: async (req: Request, res: Response) => {
        try {
            let review = await prisma.review.update({
                where: {
                    id: req.params.id
                },
                data: req.body
            });
            res.status(200).json(review);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    },
    deleteReview: async (req: Request, res: Response) => {
        try {
            let review = await prisma.review.delete({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(review);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    }
};

module.exports = ReviewControllerPg;