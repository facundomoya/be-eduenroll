import { authService }  from '../services/auth.service.js';

const login = async (req, res) => {
  const body = req.body;
  const { data, error } = await authService.login(body);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

export const authController = {
  login
};
