import {sequelize} from '../database/connect.js';
import User from '../models/user.model.js';
import Administrator from '../models/administrator.model.js';
import Professor from '../models/professor.model.js';

const getAllUsers = async() => {
  try {
    const data = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

const getUser = async(params) => {
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

const addProfessorUser = async(request) => {
  let data;
  try {
    data = await User.create(request.user);
    const data_professor = await Professor.create({
      ...request.professor,
      id_user: data.id
    });
    return { data, data_professor };
  } catch (error) {
    try{
     await User.destroy({ where: { id: data.id } });
    }catch(destroyError){
    console.error('Error al eliminar el usuario tras fallo en creación de profesor:', destroyError);
    }
    return { error: error.message };
  }   
};

const addAdminUser = async(request) => {
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
        console.error('Error al eliminar el usuario tras fallo en creación de admin:', destroyError);
      }
    return { error: error.message };
  }
};

const deleteUser = async(params) => {
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

const updateUser = async(params) => {
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

export const userServices = {
    getAllUsers,
    addProfessorUser,
    addAdminUser,
    getUser,
    updateUser,
    deleteUser
};
