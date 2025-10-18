import { degreeService } from "../services/degree.service.js";

const getAllDegrees = async (req, res) => {
  const query = req.query;
  const { data, error } = await degreeService.getAllDegrees(query);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

const getDegree = async (req, res) => {
const params = req.params;
  const { data, error } = await degreeService.getDegree(params);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

const addDegree = async (req, res) => {
const body = req.body;
  const { data, error } = await degreeService.addDegree(body);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(201).json(data);
};

const updateDegree = async (req, res) => {

};

export const degreeController = {
  getAllDegrees,
  getDegree,
  addDegree,
  updateDegree
};