const jwt = require('jsonwebtoken')

var generateJWT = (uid: string) => {
  try {
    return new Promise<string>((resolve, reject) => {
      jwt.sign(
        { uid },
        process.env.JWT_SECRET,
        { expiresIn: '24h' },
        (err: any, token: any) => {
          if (err) reject(err)
          resolve(token)
        },
      )
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = generateJWT
