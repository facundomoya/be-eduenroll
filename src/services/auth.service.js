import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import { userService } from './user.service.js';
import { cod } from '../utils/encoder.utils.js';

const login = async (params) => {
  
};

export const authService = {
  login
};
