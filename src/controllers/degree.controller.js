import { degreeService } from "../services/degree.service.js";

const getAllDegrees = async (req, res) => {
  const { data, error } = await degreeService.getAllDegrees();
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
  const request = { ...req.params, ...req.body };
  const { data, error } = await degreeService.updateDegree(request);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};
//professor_degree controllers
const addProfessorDegree = async (req, res) => {
  const body = req.body;
  const { data, error } = await degreeService.addProfessorDegree(body);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(201).json(data);
};

const getAllProfessorDegrees = async (req, res) => {
  const { data, error } = await degreeService.getAllProfessorDegrees();
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

const getProfessorDegree = async (req, res) => {
  const params = req.params;
  const { data, error } = await degreeService.getProfessorDegree(params);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

const updateProfessorDegree = async (req, res) => {
  const request = { ...req.params, ...req.body };
  const { data, error } = await degreeService.updateProfessorDegree(request);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};
//course_degree controllers
const addCourseDegree = async (req, res) => {
  const body = req.body;
  const { data, error } = await degreeService.addCourseDegree(body);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(201).json(data);
};

const getAllCoursesDegrees = async (req, res) => {
  const { data, error } = await degreeService.getAllCoursesDegrees();
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

const getCourseDegree = async (req, res) => {
  const params = req.params;
  const { data, error } = await degreeService.getCourseDegree(params);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

export const degreeController = {
  getAllDegrees,
  getDegree,
  addDegree,
  updateDegree,
  addProfessorDegree,
  getAllProfessorDegrees,
  getProfessorDegree,
  updateProfessorDegree,
  addCourseDegree,
  getAllCoursesDegrees,
  getCourseDegree
};