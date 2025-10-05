import User from '../models/user.model.js';
import { generateToken, comparePassword } from '../lib/token.js';

const login = async (body) => {
  try {
    const { user_name, password } = body;
    const user = await User.findOne({ where: { user_name } });
    if (!user) {
      return { error: 'Invalid credentials' };
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
}

export const authService = {
  login
};