import { sequelize } from "../database/connect.js";
import { studentService } from "../services/student.service.js";

const addStudents = async (req, res) => {
 const body = req.body;
  const { data, error } = await studentService.addStudents(body);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(201).json(data);
};

const getStudent = async (req, res) => {
  const params = req.params;
  const { data, error } = await studentService.getStudent(params);
  if (error) {
    return res.status(400).json({ error });
  };
  return res.status(200).json(data);
}

const getAllStudents = async (req, res) => {
  const query = req.query;
  const { data, error } = await studentService.getAllStudents(query);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

const updateStudent = async (req, res) => {
  const request = { ...req.params, ...req.body };
  const { data, error } = await studentService.updateStudent(request);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json(data);
};

export const studentController = {
  addStudents,
  getAllStudents,
  updateStudent,
  getStudent
};
