import {sequelize} from '../database/connect.js';
import User from '../models/user.model.js';
import Administrator from '../models/administrator.model.js';
import Professor from '../models/professor.model.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path'; // Importa join y dirname de path
import { readFileSync } from 'fs';

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

const getPdf = async (filename) => { 
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  
  try {
    if (!filename) throw new Error("Nombre de archivo no proporcionado");
    
    if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      throw new Error("Nombre de archivo inválido");
    }

    console.log('__dirname:', __dirname);
    console.log('Ruta completa:', join(__dirname, 'uploads', filename));
    // Usa join importado (no path.join)
    const uploadsDir = join(__dirname, '../uploads');
    const filePath = join(uploadsDir, filename);
    
    // Verificación de seguridad
    if (!filePath.startsWith(uploadsDir)) {
      throw new Error("Intento de acceso no permitido");
    }

    const fileContent = readFileSync(filePath);
    
    return { 
      data: {
        //content: fileContent.toString('base64'),
        filename: filename,
        mimeType: 'application/pdf'
      } 
    };
  } catch (error) {
    return { error: error.message };
  }
};

const getPdfForDownload = async (filename) => { 
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  try { 
    if (!filename) throw new Error("Nombre de archivo no proporcionado");

    if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      throw new Error("Nombre de archivo inválido");
    }

    const uploadsDir = join(__dirname, '../uploads');
    const filePath = join(uploadsDir, filename);

    if (!filePath.startsWith(uploadsDir)) {
      throw new Error("Intento de acceso no permitido");
    }

    const fileContent = readFileSync(filePath);

    return { fileContent };
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
    getPdf,
    deleteUser,
    getPdfForDownload
};
