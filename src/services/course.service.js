import { UniqueConstraintError } from "sequelize";
import { sequelize } from "../database/connect.js";
import Course from "../models/course.model.js";
import ProfessorCourse from "../models/professor_course.model.js";
import StudentCourse from "../models/student_course.model.js";

const getAllCourses = async () => {
  try {
    const courses = await Course.findAll();
    return { data: courses };
  } catch (error) {
    return { error: error.message };
  }
};

const getCourse = async (params) => {
  try {
    const course = await Course.findByPk(params.id);
    if (!course) {
      return { error: "Course not found" };
    }
  } catch (error) {
    return { error: error.message };
  }
};

const addCourse = async (body) => {
  try {
    const course = await Course.create(body);
    return { data: course };
  } catch (error) {
    return { error: error.message };
  }
};

const updateCourse = async (request) => {
  try {
    const course = await Course.findByPk(request.id);
    if (!course) {
      return { error: "Course not found" };
    }
    await course.update(request);
    return { data: course };
  } catch (error) {
    return { error: error.message };
  }
};
//professor_course services
const addProfessorCourse = async (body) => {
  try {
    const professor_course = await ProfessorCourse.create(body);
    return { data: professor_course };
  } catch (error) {
    return { error: error.message };
  }
};

const getAllProfessorCourses = async () => {
  try {
    const professor_courses = await ProfessorCourse.findAll();
    return { data: professor_courses };
  } catch (error) {
    return { error: error.message };
  }
};

const getProfessorCourse = async (params) => {
  try {
    const professor_course = await ProfessorCourse.findByPk(params.id);
    if (!professor_course) {
      return { error: "ProfessorCourse relation not found" };
    }
    return { data: professor_course };
  } catch (error) {
    return { error: error.message };
  }
};

const updateProfessorCourse = async (request) => {
  try {
    const professor_course = await ProfessorCourse.findByPk(request.id);
    if (!professor_course) {
      return { error: "ProfessorCourse relation not found" };
    }
    await professor_course.update(request);
    return { data: professor_course };
  } catch (error) {
    if(error instanceof UniqueConstraintError){
      return {
        error: "This course is already linked to this professor"
      }
    }
    return { error: error.message };
  }
};
//student_course services
const addStudentCourse = async (body) => {
  try {
    const student_course = await StudentCourse.create(body);
    return { data: student_course };
  } catch (error) {
    return { error: error.message };
  }
};

const getAllStudentCourses = async () => {
  try {
    const student_courses = await StudentCourse.findAll();
    return { data: student_courses };
  } catch (error) {
    return { error: error.message };
  }
};

const getStudentCourse = async (params) => {
  try {
    const student_course = await StudentCourse.findByPk(params.id);
    if (!student_course) {
      return { error: "StudentCourse relation not found" };
    }
    return { data: student_course };
  } catch (error) {
    return { error: error.message };
  }
};

const updateStudentCourse = async (request) => {
  try {
    const student_course = await StudentCourse.findByPk(request.id);
    if (!student_course) {
      return { error: "StudentCourse relation not found" };
    }
    await student_course.update(request);
    return { data: student_course };
  } catch (error) {
    if(error instanceof UniqueConstraintError){
      return {
        error: "This student is already linked to this course"
      }
    }
    return { error: error.message };
  }
};

export const courseService = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  addProfessorCourse,
  getAllProfessorCourses,
  getProfessorCourse,
  updateProfessorCourse,
  getAllStudentCourses,
  addStudentCourse,
  getStudentCourse,
  updateStudentCourse
};

