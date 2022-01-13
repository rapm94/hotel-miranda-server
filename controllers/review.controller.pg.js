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
const client_1 = require("@prisma/client");
const { reviewSchema } = require('../helpers/validate.schema');
const prisma = new client_1.PrismaClient();
const ReviewControllerPg = {
    getAllReviews: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let reviews = yield prisma.review.findMany();
            res.status(200).json(reviews);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
            console.log(err);
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
    getReviewById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let review = yield prisma.review.findUnique({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json(review);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
            console.log(err);
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
    createReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const validReview = yield reviewSchema.validateAsync(req.body);
            let review = yield prisma.review.create({
                data: validReview,
            });
            res.status(201).json(review);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
    updateReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const validReview = yield reviewSchema.validateAsync(req.body);
            let review = yield prisma.review.update({
                where: {
                    id: req.params.id,
                },
                data: validReview,
            });
            res.status(200).json(review);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
    deleteReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let review = yield prisma.review.delete({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json(review);
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    }),
};
module.exports = ReviewControllerPg;
