import User from "../models/User.js"

export class UsersManager {
    async create(user) {
        let newUser = await User.create(user);
        return newUser.toJSON();
    }

    async getBy(filter) {
        return await User.findOne(filter).lean();
    }

    async getAllUsers() {
        return await User.find().lean();
    }

    async update(filter, updates) {
        return await User.findOneAndUpdate(filter, updates, { new: true }).lean();
    }

    async delete(filter) {
        return await User.deleteOne(filter);
    }
}
