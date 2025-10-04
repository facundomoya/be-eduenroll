import { userService } from "../services/user.service.js";

const getAllUsers = async (req, res) => {
  const query = req.query;
  const { data, error} = await userService.getAllUsers(query);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

const getUser = async (req, res) => {
  const params = req.params;
  const { data, error} = await userService.getUser(params);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

const addProfessorUser = async (req, res) => {
  const body = req.body;
  const { data, error} = await userService.addProfessorUser(body);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(201).json(data);
};

const addAdminUser = async (req, res) => {
const body = req.body;
  const { data, error} = await userService.addAdminUser(body);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(201).json(data);
};

const deleteUser = async (req, res) => {
const params = req.params;
  const { data, error} = await userService.deleteUser(params);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(204).json(data);
};

const updateUserPassword = async (req, res) => {
  const request = { ...req.params, ...req.body };
  const { data, error} = await userService.updateUserPassword(request);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

export const userController = {
  getAllUsers,
  addProfessorUser,
  addAdminUser,
  getUser,
  deleteUser,
  updateUserPassword
};
