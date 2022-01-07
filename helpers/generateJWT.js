"use strict";
const jwt = require('jsonwebtoken');
var generateJWT = (uid) => {
    try {
        return new Promise((resolve, reject) => {
            jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn: '24h' }, (err, token) => {
                if (err)
                    reject(err);
                resolve(token);
            });
        });
    }
    catch (error) {
        console.log(error);
    }
};
module.exports = generateJWT;
