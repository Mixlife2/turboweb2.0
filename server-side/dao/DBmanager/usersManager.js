import User from "../models/User.js"

export class UsersManager{

    async create(user){
        let newUser=await User.create(user)
        return newUser.toJSON()
    }

    async getBy(filter){   // {email}
        return await User.findOne(filter).lean()
    }

}
