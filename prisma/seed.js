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
const bookings_1 = require("./seedingData/bookings");
const reviews_1 = require("./seedingData/reviews");
const rooms_1 = require("./seedingData/rooms");
const users_1 = require("./seedingData/users");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Seeding data...');
        for (const review of reviews_1.reviewsData) {
            yield prisma.review.upsert({
                where: {
                    id: review.id
                },
                create: review,
                update: review
            });
        }
        for (const room of rooms_1.roomsData) {
            yield prisma.room.upsert({
                where: {
                    id: room.id
                },
                create: room,
                update: room
            });
        }
        for (const booking of bookings_1.bookingsData) {
            yield prisma.booking.createMany({
                data: booking
            });
        }
        for (const user of users_1.userData) {
            yield prisma.user.upsert({
                where: {
                    id: user.id
                },
                create: user,
                update: user
            });
        }
    });
}
main()
    .catch((e) => {
    console.error(e);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
    console.log('Done!');
}));
