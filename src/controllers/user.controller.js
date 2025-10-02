import { userService } from "../services/user.service.js";

const getAllUsers = async (req, res) => {
  const request = req.query;
  const { data, error} = await userService.getAllUsers(request);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

const getUser = async (req, res) => {
  const request = req.params;
  const { data, error} = await userService.getUser(request);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

const addProfessorUser = async (req, res) => {
  const request = req.body;
  const { data, error} = await userService.addProfessorUser(request);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(201).json(data);
};

const addAdminUser = async (req, res) => {
const request = req.body;
  const { data, error} = await userService.addAdminUser(request);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(201).json(data);
};

const deleteUser = async (req, res) => {

};

const updateUser = async (req, res) => {

};

export const userController = {
  getAllUsers,
  addProfessorUser,
  addAdminUser,
  getUser,
  deleteUser,
  updateUser
};
