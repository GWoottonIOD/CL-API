import {getUsers, getUsersByID, validatePasswordOfUser, validateCreatedUser, createUser, updateUsers, deleteUsers, deleteUserById, loginUser} from './userController.js';

export const userController = {
    getUsers,
    getUsersByID,
    validatePasswordOfUser,
    validateCreatedUser,
    createUser,
    loginUser,
    updateUsers,
    deleteUsers,
    deleteUserById
}