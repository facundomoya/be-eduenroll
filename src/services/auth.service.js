import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import { userService } from './user.service.js';
import { cod } from '../utils/encoder.utils.js';

const login = async (params) => {
  const { user_name, password } = params;

  try {
    const { data: users, error } = await userService.getAllUsersAuth({user_name});

    if (error || !users || users.length === 0) {
      throw new Error('Invalid credentials.');
    }

    const user = users[0];
    if (!user) {
      throw new Error('User not found.');
    }

    console.log(user)

    if (!user.password) {
      throw new Error('User password not found.');
    }

    const validPassword = await cod.verify(password, user.password);
    console.log(validPassword)

    if (!validPassword) {
      throw new Error('Invalid credentials.');
    }

    const token = jwt.sign(
      {
        id: user.id,
        user_name: user.user_name,
      },
      config.JWT.JWT_PRIVATE_KEY,
      { expiresIn: config.JWT.EXPIRES_IN }
    );


    return { data: { token } };
  } catch (error) {
    return { error: error.message };
  }
};

export const authService = {
  login
};
