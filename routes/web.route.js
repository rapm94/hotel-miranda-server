"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require('express');
let router = express.Router();
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
    });
});
router.get('/about', (req, res) => {
    res.render('about-us', {
        title: 'About',
    });
});
router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact',
    });
});
router.get('/room-list', (req, res) => {
    res.render('room-list'), {
        title: 'Room List',
    };
});
router.get('/room-offers', (req, res) => {
    res.render('room-offers'), {
        title: 'Room Offers',
    };
});
router.get('/room-details', (req, res) => {
    res.render('room-details'), {
        title: 'Room Details',
    };
});
module.exports = router;
