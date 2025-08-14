import jwt from 'jsonwebtoken';
import {configJWT} from '../config/config.js';
import { userService } from './user.service.js';

const login = async (params) => {
  const { user_name, password } = params;
  const data_search = {};

  user_name && (data_search.user_name = user_name);
  password && (data_search.password = password);

  try {
    const { data: user, error } = await userService.getAllUsers(data_search);

    if (error || !user || user.length === 0) {
      throw new Error('Credenciales inválidas');
    }

    const token = jwt.sign(
      {
        id: user[0]?.id,
        user_name: user[0]?.user_name,
      },
      configJWT.JWT.JWT_PRIVATE_KEY,
      { expiresIn: configJWT.JWT.EXPIRES_IN }
    );


    return { data: { token } };
  } catch (error) {
    return { error: error.message };
  }
};

export const authService = {
  login
};
