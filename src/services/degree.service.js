import Degree from "../models/degree.model.js";
import ProfessorDegree from "../models/professor_degree.model.js";
import DegreeCourse from "../models/course_degree.model.js";
import { UniqueConstraintError } from "sequelize";

const getAllDegrees = async () => {
  try {
    const degrees = await Degree.findAll();
    return { data: degrees };
  } catch (error) {
    return { error: error.message };
  }
};

const getDegree = async (params) => {
  try {
    const degree = await Degree.findByPk(params.id);
    if (!degree) {
      return { error: "Degree not found" };
    }
    return { data: degree };
  } catch (error) {
    return { error: error.message };
  }
};

const addDegree = async (body) => {
  try {
    const degree = await Degree.create(body);
    return { data: degree };
  } catch (error) {
    return { error: error.message };
  }
};

const updateDegree = async (request) => {
  try {
    const degree = await Degree.findByPk(request.id);
    if (!degree) {
      return { error: "Degree not found" };
    }
    await degree.update(request);
    return { data: degree };
  } catch (error) {
    return { error: error.message };
  }
};
//professor_degree services
const addProfessorDegree = async (body) => {
  try {
    const professor_degree = await ProfessorDegree.create(body);
    return { data: professor_degree };
  } catch (error) {
    return { error: error.message };
  }
};

const getAllProfessorDegrees = async () => {
  try {
    const professor_degrees = await ProfessorDegree.findAll();
    return { data: professor_degrees };
  } catch (error) {
    return { error: error.message };
  }
};

const getProfessorDegree = async (params) => {
  try {
    const professor_degree = await ProfessorDegree.findByPk(params.id);
    if (!professor_degree) {
      return { error: "The relationship between professor and degree was not found" };
    }
    return { data: professor_degree };
  } catch (error) {
    return { error: error.message };
  }
};

const updateProfessorDegree = async (request) => {
  try {
    const professor_degree = await ProfessorDegree.findByPk(request.id);
    if (!professor_degree) {
      return { error: "The relationship between professor and degree was not found" };
    }
    await professor_degree.update(request);
    return { data: professor_degree };
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      return {
        error: "This professor is already linked to this degree"
      };
    }
    return { error: error.message };
  }
};
//course_degree services
const addCourseDegree = async (body) => {
  try {
    const course_degree = await DegreeCourse.create(body);
    return { data: course_degree };
  } catch (error) {
    return { error: error.message };
  }
};

const getAllCoursesDegrees = async () => {
  try {
    const course_degrees = await DegreeCourse.findAll();
    return { data: course_degrees };
  } catch (error) {
    return { error: error.message };
  }
};

const getCourseDegree = async (params) => {
  try {
    const course_degree = await DegreeCourse.findByPk(params.id);
    if (!course_degree) {
      return { error: "The relationship between course and degree was not found" };
    }
    return { data: course_degree };
  } catch (error) {
    return { error: error.message };
  }
};

const updateCourseDegree = async (request) => {
  try {
    const course_degree = await DegreeCourse.findByPk(request.id);
    if (!course_degree) {
      return { error: "The relationship between course and degree was not found" };
    }
    await course_degree.update(request);
    return { data: course_degree };
  } catch (error) {
    return { error: error.message };
  }
};

export const degreeService = {
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
  getCourseDegree,
  updateCourseDegree
};
