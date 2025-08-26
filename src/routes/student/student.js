import express from "express";
import { VerifyToken } from "../../middleware/verifyToken.js";
import { studentController } from "../../controllers/student.controller.js";
import { studentValidator } from "../../validator/validator_functions/student.validator.js";

const route = express.Router();

route.get("/student", VerifyToken, studentController.getAllStudents);
route.get("/student/:id", VerifyToken, studentController.getStudent);
route.post("/student", VerifyToken, studentValidator.student_save, studentController.addStudents);
route.put("/student/:id", VerifyToken, studentValidator.student_update, studentController.updateStudent);

export default route;
