import express from 'express';
import  VerifyToken  from '../../middleware/verifyToken.js';
import { courseController } from '../../controllers/course.controller.js';
import { courseValidator } from '../../validators/course.validator.js';
import { professorCourseValidator } from '../../validators/professor_course.validator.js';

const route = express.Router();

route.get('/courses', courseController.getAllCourses);
route.get('/course/:id', courseController.getCourse);
route.post('/course', VerifyToken, courseValidator.courseCreateValidator, courseController.addCourse);
route.put('/course/:id', VerifyToken, courseValidator.courseUpdateValidator, courseController.updateCourse);
//professor_course routes
route.get('/professors/course', courseController.getAllProfessorCourses);
route.get('/professor/course/:id', courseController.getProfessorCourse);
route.post('/professor/course', VerifyToken, professorCourseValidator.professorCourseCreateValidator, courseController.addProfessorCourse);
route.put('/professor/course/:id', VerifyToken, professorCourseValidator.professorCourseUpdateValidator, courseController.updateProfessorCourse);

export default route;