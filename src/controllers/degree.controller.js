import { mixParams } from "../utils/formatData.utils.js";
import { degreeService } from "../services/degree.service.js";

const getAllDegrees = async (req, res) => {
  const params = mixParams(req);
  const { data, error } = await degreeService.getAllDegrees(params);

  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
};

const getDegree = async (req, res) => {
  const params = mixParams(req);
  const { data, error } = await degreeService.getDegree(params);

  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
};

const addDegree = async (req, res) => {
  const params = mixParams(req);
  const { data, error } = await degreeService.addDegree(params);

  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
};

const updateDegree = async (req, res) => {
  const params = mixParams(req);
  const { data, error } = await degreeService.updateDegree(params);

  if (error) {
    return res.status(500).json({ error, code: 500 });
  };

  return res.status(200).json({ data, code: 200 });
};

export const degreeController = {
  getAllDegrees,
  getDegree,
  addDegree,
  updateDegree
};