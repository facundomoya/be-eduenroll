import { sequelize } from "../database/connect.js";
import Course from "../models/course.model.js";

const getAllCourses = async () => {
try{ 
    const courses =  await Course.findAll();
    return { data: courses };
}catch(error){
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

export const courseService = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse
};

