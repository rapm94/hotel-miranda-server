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
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (user in users) {
            yield prisma.user.create({
                data: {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    jobDescription: user.jobDescription,
                    phone: user.phone,
                    status: user.status,
                    role: user.role,
                }
            });
        }
        //loop through the rooms and create them in the database with the booking id
        for (room in rooms) {
            yield prisma.room.create({
                data: {
                    name: room.name,
                    description: room.description,
                    price: room.price,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    booking: {
                        connect: {
                            id: room.bookingId
                        }
                    }
                }
            });
        }
        for (review in reviews) {
            yield prisma.review.create({
                data: {
                    content: review.content,
                    rating: review.rating,
                    images: {
                        create: review.images
                    }
                }
            });
        }
        ;
        for (booking in bookings) {
            yield prisma.booking.create({
                data: {
                    startDate: booking.startDate,
                    endDate: booking.endDate,
                    user: {
                        connect: {
                            id: booking.user
                        }
                    },
                    room: {
                        connect: {
                            id: booking.room
                        }
                    }
                }
            });
        }
    });
}
