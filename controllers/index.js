import {getUsers, getUsersByID, validatePasswordOfUser, validateCreatedUser, createUser, updateUsers, deleteUsers, deleteUserById} from './userController.js';

export const userController = {
    getUsers,
    getUsersByID,
    validatePasswordOfUser,
    validateCreatedUser,
    createUser,
    updateUsers,
    deleteUsers,
    deleteUserById
}