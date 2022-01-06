export{}
import { Request, Response } from 'express';
let { Review } = require('../models/review.schema');


const reviewController = {
    getAllReviews: async (req: Request, res: Response) => {
        try {
            let reviews = await Review.find();
            res.status(200).json(reviews);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        }
    },
    getReviewById: async (req: Request, res: Response) => {
        try {
            let review = await Review.findById(req.params.id);
            res.status(200).json(review);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message
            });
        }
    },
    createReview: async (req: Request, res: Response) => {
        try {
            let review = new Review(req.body);
            await review.save();
            res.status(201).json(review);
        } catch (err) {
            res.status(500).json({
                message: (err as Error).message
            });
        }
    },
    deleteReview: async (req: Request, res: Response) => {
        try {
            let review = await Review.findByIdAndDelete(req.params.id);
            res.status(200).json(review);
        } catch (err) {
            res.status(500).json({
                message: ( err as Error).message 
            });
        }
    },
};

module.exports = reviewController;