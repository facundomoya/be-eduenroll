import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import { userServices } from './user.services.js';

const login = async (params) => {
  const { user_name, password } = params;
  const data_search = {};

  user_name && (data_search.user_name = user_name);
  password && (data_search.password = password);

  try {
    const { data: user, error } = await userServices.getAllUsers(data_search);

    if (error || !user || user.length === 0) {
      throw new Error('Credenciales inválidas');
    }

    const token = jwt.sign(
      {
        id: user[0]?.id,
        user_name: user[0]?.user_name,
      },
      config.jwt.jwt,
      { expiresIn: '1h' }
    );

    return { data: { token } };
  } catch (error) {
    return { error: error.message };
  }
};

export const authServices = {
  login
};
