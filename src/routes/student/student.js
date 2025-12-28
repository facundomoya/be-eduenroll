import express from "express";
import VerifyToken from "../../middleware/verifyToken.js";
import { studentController } from "../../controllers/student.controller.js";
import {studentValidator} from "../../validators/student.validator.js";

const route = express.Router();

route.get("/student", studentController.getAllStudents);
route.get("/student/:id", studentController.getStudent);
route.post("/student", VerifyToken, studentValidator.studentCreateValidator, studentController.addStudents);
route.put("/student/:id", VerifyToken, studentValidator.studentUpdateValidator, studentController.updateStudent);

export default route;
