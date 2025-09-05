import express from 'express';
import { VerifyToken } from '../../middleware/verifyToken.js';
import { courseController } from '../../controllers/course.controller.js';

const route = express.Router();

route.get('/courses', VerifyToken, courseController.getAllCourses);
route.get('/course/:id', VerifyToken, courseController.getCourse);
route.post('/course', VerifyToken, courseController.addCourse);
route.put('/course/:id', VerifyToken, courseController.updateCourse);

export default route;