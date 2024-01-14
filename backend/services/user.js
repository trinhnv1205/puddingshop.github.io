const db  = require('../app');
const User = require('../models/user');

class UserService {
    static addUser = async (User) => {
        const UserRepository = await db.getRepository(User);
        const newUser = UserRepository.create(User);
        await UserRepository.save(newUser);
    };

    static getUsers = async () => {
        const UserRepository = db.getRepository(User);
        return await UserRepository.find();
    };

    static getUserById = async (id) => {
        const UserRepository = db.getRepository(User);
        return await UserRepository.findOne({where: {id: id} });
    };

    static updateUser = async (id, User) => {
        const UserRepository = db.getRepository(User);
        await UserRepository.update({where: {id: id} }, User);
    };

    static deleteUser = async (id) => {
        const UserRepository = db.getRepository(User);
        await UserRepository.delete({where: {id: id} });
    }
}

module.exports = UserService;