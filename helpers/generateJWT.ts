const jwt = require('jsonwebtoken')

const generateJWT = (uid: string) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { uid },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err: any, token: any) => {
        if (err) reject(err)
        resolve(token)
      },
    )
  })
}

module.exports = generateJWT;
