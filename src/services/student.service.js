import { sequelize } from '../database/connect.js';
import Student from '../models/student.model.js';
import Degree from '../models/degree.model.js';

const addStudents = async (request) => {
 let data;
  try {
/*     data_degree = await Degree.findOne({
      where : {
        id: request.student.id_degree
      }
    }) */
    data = await Student.create(request);
    return { data };
  } catch (error) {
    return { error: error.message };
  }
}

export const studentService = {
  addStudents
};
