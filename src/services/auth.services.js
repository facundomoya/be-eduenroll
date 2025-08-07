import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import { userServices } from './user.services.js';

export const authServices = {
  login: async (params) => {

    const { user_name, password } = params;

    try {
      const { data: user, error } = await userServices.getAllUsers({
        
          user_name: user_name,
          password: password 
           
      });
      
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

      return { data: { token, user } };
    } catch (error) {
      return { error: error.message };
    }
  },
};