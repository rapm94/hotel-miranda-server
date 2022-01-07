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
let Review = require('../models/review.schema');
const reviewController = {
    getAllReviews: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let reviews = yield Review.find();
            res.status(200).json(reviews);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }),
    getReviewById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let review = yield Review.findById(req.params.id);
            res.status(200).json(review);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }),
    createReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const review = new Review(req.body);
            yield review.save();
            res.status(201).json(review);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }),
    deleteReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let review = yield Review.findByIdAndDelete(req.params.id);
            res.status(200).json(review);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }),
};
module.exports = reviewController;
