const UserI = require('../types/user.interface')

export interface AuthI {
    password: string;
    user: typeof UserI;
}

