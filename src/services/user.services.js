import {sequelize} from '../database/connect.js';
import User from '../models/user.model.js';
import UserPdf from '../models/user_pdf.model.js';
import Administrator from '../models/administrator.model.js';
import Professor from '../models/professor.model.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path'; // Importa join y dirname de path
import { readFileSync } from 'fs';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url); // Convierte la URL del módulo a una ruta de archivo, sirve para las funciones del PDF
const __dirname = dirname(__filename); // Obtiene el directorio actual, sirve para las funciones del PDF

const getAllUsers = async(params) => {
  const { user_name, password } = params;
  const data_search = {};

  user_name && (data_search.user_name = user_name);
  password && (data_search.password = password);

    try {
        const data = await User.findAll({
          where: data_search
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

const getUserPdf = async (userId) => {
  try {
    const pdf = await UserPdf.findOne({ where: { userId } });

    if (!pdf) {
      return { error: 'No se encontró un PDF para este usuario' };
    }

    const filename = pdf.pdf_name;
    const uploadsDir = path.join(__dirname, '../uploads'); // Asegúrate de que la ruta sea correcta
    const filePath = path.join(uploadsDir, filename);

    if (!fs.existsSync(filePath)) {
      return { error: 'El archivo no existe en el servidor' };
    }

    return { data: { filePath, filename } };
  } catch (err) {
    return { error: 'Error al buscar el PDF en la base de datos'};
        
  }
};

export const userServices = {
    getAllUsers,
    addProfessorUser,
    addAdminUser,
    getUser,
    getUserPdf,
    updateUser,
    deleteUser
};
