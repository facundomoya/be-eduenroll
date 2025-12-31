import express from 'express';
import  VerifyToken  from '../../middleware/verifyToken.js';
import { courseController } from '../../controllers/course.controller.js';
import { courseValidator } from '../../validators/course.validator.js';

const route = express.Router();

route.get('/courses', courseController.getAllCourses);
route.get('/course/:id', courseController.getCourse);
route.post('/course', VerifyToken, courseValidator.courseCreateValidator, courseController.addCourse);
route.put('/course/:id', VerifyToken, courseValidator.courseUpdateValidator, courseController.updateCourse);

export default route;