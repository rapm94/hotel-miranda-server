const express = require('express');
const router = express.Router();
import {Request, Response} from 'express';


router.get("/", ( req:Request, res:Response) => {
    res.json(
        {
            message: "Everything is ok",
            user: req.user,
            token: req.query.token
        });
});



    module.exports = router;