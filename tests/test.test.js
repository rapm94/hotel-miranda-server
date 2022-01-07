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
const app = require("../app");
const mongoose = require("mongoose");
const supertest = require("supertest");
beforeEach((done) => {
    mongoose.connect(process.env.DB_CNN, { useNewUrlParser: true, useUnifiedTopology: true }, () => done());
});
afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
        mongoose.connection.close(() => done());
    });
});
test("GET /api unauthorized", () => __awaiter(void 0, void 0, void 0, function* () {
    yield supertest(app).get("/api").expect(401);
}));
test("GET /api authorized", () => __awaiter(void 0, void 0, void 0, function* () {
    const token = '?secret_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxZDZjOGU1NWRmZGJmYzE0ODMzMTJmOCIsImVtYWlsIjoiZXhhbXBsZUBleGFtcGxlLmNvbSJ9LCJpYXQiOjE2NDE0NjY1Nzd9.EFY9FgYyRmGR3WVXTgSsEMnlSTDgLyGcHx8199SyGuw';
    yield supertest(app).get("/api" + token).expect(200);
}));
