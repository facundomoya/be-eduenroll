import { sequelize } from '../database/connect.js';
import Student from '../models/student.model.js';

const addStudents = async (body) => {
  const t = await sequelize.transaction();
  try {
    const degree = await Student.create({
      ...body,
      id_degree: body.id_degree
    }, { transaction: t });
    await t.commit();
    return { data: degree };
  } catch (error) {
    await t.rollback();
    return { error: error.message };
  }
};

const getStudent = async (params) => {
  try {
    const student = await Student.findByPk(params.id);
    if (!student) {
      return { error: 'Student not found' };
    }
    return { data: student };
  } catch (error) {
    return { error: error.message };
  }
};

const getAllStudents = async () => {
  try {
    const students = await Student.findAll();
    return { data: students };
  } catch (error) {
    return { error: error.message };
  }
};

const updateStudent = async (request) => {
  try {
    const student = await Student.findByPk(request.id);
    if (!student) {
      return { error: 'Student not found' };
    }
    await student.update(request);
    return { data: student };
  } catch (error) {
    return { error: error.message };
  }
};

export const studentService = {
  addStudents,
  getAllStudents,
  updateStudent,
  getStudent
};
