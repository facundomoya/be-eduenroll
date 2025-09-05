import { sequelize } from "../database/connect.js";
import Course from "../models/course.model.js";

const getAllCourses = async (request) => {
  try {
    const courses = await Course.findAll();
    return { data: courses, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

const getCourse = async (id) => {
  let data;
  try {
    data = await Course.findByPk(id);
  } catch (error) {
    return { data: null, error: error.message };
  }
  if (!data) {
    return { data: null, error: "Course not found" };
  }
  return { data, error: null };
};

const addCourse = async (request) => {
 let data;
  try {
    data = await Course.create(request.course);
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

const updateCourse = async (params) => {
  const { id, course } = params;
  const data_search = {};

  id && (data_search.id = id);

  try {
    const [updated] = await Course.update(course, {
      where: data_search,
    });

    if (updated) {
      const updatedCourse = await Course.findOne({ where: data_search });
      return { data: updatedCourse };
    }
    throw new Error("Course not found");
  } catch (error) {
    return { error: error.message };
  }
};

export const courseService = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse
};

