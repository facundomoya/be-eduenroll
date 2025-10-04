import { sequelize } from '../database/connect.js';
import User from '../models/user.model.js';
import Administrator from '../models/administrator.model.js';
import Professor from '../models/professor.model.js';
import { cod } from '../utils/encoder.utils.js';

const getAllUsers = async () => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    return { data: users };
  } catch (error) {
    return { error: error.message };
  }
};

const getUser = async (params) => {
  try {
    const user = await User.findByPk(params.id, {
      attributes: { exclude: ['password'] }
    });
    if (!user) {
      return { error: 'User not found' };
    }
    return { data: user };
  } catch (error) {
    return { error: error.message };
  }
};

const addProfessorUser = async (body) => {
const passwordHash = await cod.encoder(body.user.password);
  try {
    const user = await User.create({
      ...body.user,
      password: passwordHash
    });
    const professor = await Professor.create({
      ...body.professor,
      id_user: user.id
    });
    return { data: user, professor };
  } catch (error) {
    return { error: error.message };
  }
};

const addAdminUser = async (body) => {
  const passwordHash = await cod.encoder(body.user.password);
  try {
    const user = await User.create({
      ...body.user,
      password: passwordHash
    });
    const admin = await Administrator.create({
      ...body.admin,
      id_user: user.id
    });
    return { data: user, admin };
  } catch (error) {
    return { error: error.message };
  }
};

const deleteUser = async (params) => {
try {
    const user = await User.findByPk(params.id);
    if (!user) {
      return { error: 'User not found' };
    }
    await user.destroy();
    return { data: user };
  } catch (error) {
    return { error: error.message };
  }
};

const updateUserPassword = async (request) => {
try {
    const user = await User.findByPk(request.id);
    const newPassword = await cod.encoder(request.password);
    if (!user) {
      return { error: 'User not found' };
    }
    await user.update({ password: newPassword });
    return { data: user };
  } catch (error) {
    return { error: error.message };
  }
};

export const userService = {
  getAllUsers,
  addProfessorUser,
  addAdminUser,
  getUser,
  updateUserPassword,
  deleteUser
};
