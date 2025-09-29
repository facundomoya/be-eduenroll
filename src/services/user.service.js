import { sequelize } from '../database/connect.js';
import User from '../models/user.model.js';
import Administrator from '../models/administrator.model.js';
import Professor from '../models/professor.model.js';
import { cod } from '../utils/encoder.utils.js';

const getAllUsersAuth = async (params = {}) => {

};

const getAllUsers = async () => {

};

const getUser = async (params) => {

};

const addProfessorUser = async (request) => {

};

const addAdminUser = async (request) => {

};

const deleteUser = async (params) => {

};

const updateUser = async (params) => {
  
};

export const userService = {
  getAllUsers,
  getAllUsersAuth,
  addProfessorUser,
  addAdminUser,
  getUser,
  updateUser,
  deleteUser
};
