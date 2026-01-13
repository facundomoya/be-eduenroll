import express from 'express';
import  VerifyToken  from '../../middleware/verifyToken.js';
import { courseController } from '../../controllers/course.controller.js';
import { courseValidator } from '../../validators/course.validator.js';
import { professorCourseValidator } from '../../validators/professor_course.validator.js';
import { studentCourseValidator } from '../../validators/student_course.validator.js';

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
//student_course routes
route.get('/students/course', courseController.getAllStudentCourses);
route.get('/student/course/:id', courseController.getStudentCourse);
route.post('/student/course', VerifyToken, studentCourseValidator.studentCourseCreateValidator, courseController.addStudentCourse);
route.put('/student/course/:id', VerifyToken, studentCourseValidator.studentCourseUpdateValidator, courseController.updateStudentCourse);

export default route;