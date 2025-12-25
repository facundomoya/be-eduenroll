import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config } from '../config/config.js';

export const generateToken = (user) => {
  const payload = {
    id: user.id,
    user_name: user.user_name,
    type: user.type
  };
  return jwt.sign(payload, config.JWT.JWT_PRIVATE_KEY, { expiresIn: config.JWT.JWT_EXPIRES_IN });
};

export const comparePassword = async (plain, hash) => {
  return await bcrypt.compare(plain, hash);
};
