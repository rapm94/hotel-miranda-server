let mongoose = require('mongoose')
let Schema = mongoose.Schema
let bcrypt = require('bcrypt')
import { UserI } from '../types/user.types'

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  jobDescription: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  jwt: {
    type: String,
  },
})
userSchema.pre('save', async function (this: any, next: Function) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})
userSchema.methods.isValidPassword = async function (password: string) {
  const user = this
  const compare = await bcrypt.compare(password, user.password)

  return compare
}

const User = mongoose.model('User', userSchema)
module.exports = User
