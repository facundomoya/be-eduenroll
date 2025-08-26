import { sequelize } from '../database/connect.js';
import Student from '../models/student.model.js';

const addStudents = async (request) => {
 let data;
  try {
    data = await Student.create(request.student);
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

const getStudent = async (id) => {
  let data;
  try {
    data = await Student.findByPk(id);
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

const getAllStudents = async () => {
  let data;
  try {
    data = await Student.findAll();
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

const updateStudent = async (params) => {
  const { id, student } = params;
  const data_search = {};

  id && (data_search.id = id);

  try {
    const [updated] = await Student.update(student, {
      where: data_search,
    });

    if (updated) {
      const updatedStudent = await Student.findOne({ where: data_search });
      return { data: updatedStudent };
    }
    throw new Error("Student not found");
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
