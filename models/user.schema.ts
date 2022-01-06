let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt');
import { UserI } from "../types/user.types";


const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    jwt: {
        type: String,
        required: true
    }
});
userSchema.pre("save", async function (this:any, next:Function) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
  
    this.password = hash;
    next();
  });
  userSchema.methods.isValidPassword = async function (password:string) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
  
    return compare;
  };

const User = mongoose.model('User', userSchema);
module.exports = User;