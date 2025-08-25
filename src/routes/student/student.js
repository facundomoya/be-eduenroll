import express from "express";
import { VerifyToken } from "../../middleware/verifyToken.js";
import { studentController } from "../../controllers/student.controller.js";
import { studentValidator } from "../../validator/validator_functions/student.validator.js";

const route = express.Router();

route.post("/student", VerifyToken, studentValidator.student_save, studentController.addStudents);

export default route;
