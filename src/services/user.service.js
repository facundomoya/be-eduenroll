import { sequelize } from '../database/connect.js';
import User from '../models/user.model.js';
import Administrator from '../models/administrator.model.js';
import Professor from '../models/professor.model.js';
import { cod } from '../utils/encoder.utils.js';

const getAllUsersAuth = async (params = {}) => {
  const { user_name, password } = params;
  const data_search = {};
  
  if (user_name) data_search.user_name = user_name;
  if (password) data_search.password = password;

  try {
    const data = await User.findAll({
      where: data_search,
    });
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

const getAllUsers = async () => {
  try {
    const data = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

const getUser = async (params) => {
  try {
    const data = await User.findOne({
      where: {
        id: params.id
      }
    });
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

const addProfessorUser = async (request) => {
  const t = await sequelize.transaction();
  const { password } = request.user;

  try {

    const passwordHashed = password ? await cod.encoder(password) : null;

    const userData = {
      ...request.user,
      password: passwordHashed
    };

    // Crear usuario dentro de la transacción
    const data = await User.create(userData, { t });

    // Crear profesor dentro de la transacción
    const data_professor = await Professor.create({
      ...request.professor,
      id_user: data.id
    }, { t });

    // Si todo sale bien, confirmar la transacción
    await t.commit();

    return { data, data_professor };
  } catch (error) {
    // Si algo falla, revertir toda la transacción
    await t.rollback();
    return { error: error.message };
  }
};

const addAdminUser = async (request) => {
  let data;
  try {
    data = await User.create(request.user);
    const data_admin = await Administrator.create({
      ...request.admin,
      id_user: data.id
    });
    return { data, data_admin };
  } catch (error) {
    try {
      await User.destroy({ where: { id: data.id } });
    } catch (destroyError) {
      console.error('Error to destroy user when adding admin:', destroyError);
    }
    return { error: error.message };
  }
};

const deleteUser = async (params) => {
  try {
    const data = await User.destroy({
      where: {
        id: params.id
      }
    });
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

const updateUser = async (params) => {
  try {
    const data = await User.update({
      user_name: params.user.user_name,
      password: params.user.password,
    },
      {
        where: {
          id: params.id,
        }
      });
    return { data };
  } catch (error) {
    return { error: error.message };
  }
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
