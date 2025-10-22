import User from '../models/user.model.js';
import Professor from '../models/professor.model.js';
import Administrator from '../models/administrator.model.js';
import { generateToken, comparePassword } from '../lib/token.js';

const login = async (body) => {
  try {
    const { user_name, password } = body;
    const user = await User.findOne({ where: { user_name }, include: [Professor, Administrator] });
    let role = null;

    if (!user) {
      return { error: 'Invalid credentials' };
    }
    if(user.Professor){
      role = 'professor';
    }else {
      role = 'administrator';
    }

    const valid = await comparePassword(password, user.password);
    if (!valid) {
      return { error: 'Invalid credentials' };
    }
    const token = generateToken(user);
    return { data: { user, token } };
  } catch (error) {
    return { error: error.message };
  }
};

export const authService = {
  login
};