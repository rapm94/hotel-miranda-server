"use strict";
const jwt = require('jsonwebtoken');
var generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err)
                reject(err);
            resolve(token);
        });
    });
};
module.exports = generateJWT;
