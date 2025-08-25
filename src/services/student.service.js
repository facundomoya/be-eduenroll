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
}

export const studentService = {
  addStudents
};
