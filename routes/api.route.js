"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    res.json({
        message: "Everything is ok",
        user: req.user,
        token: req.query.token
    });
});
module.exports = router;
