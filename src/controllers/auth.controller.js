import { authServices }  from '../services/auth.services.js';
import { mixParams } from '../utils/formatData.utils.js';

const login = async (req, res) => {
  try {
    const params = mixParams(req);
    const { data, error } = await authServices.login(params);
    if (error) {
      return res.status(401).json({ error, code: 401 });
    }
    return res.status(200).json({ data, code: 200 });
  } catch (error) {
    return res.status(500).json({ error: error.message, code: 500 });
  }
};

export const authController = {
  login
};
