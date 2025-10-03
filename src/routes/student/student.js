import express from "express";
import  VerifyToken  from "../../middleware/verifyToken.js";
import { studentController } from "../../controllers/student.controller.js";

const route = express.Router();

route.get("/student", VerifyToken, studentController.getAllStudents);
route.get("/student/:id", VerifyToken, studentController.getStudent);
route.post("/student", VerifyToken, studentController.addStudents);
route.put("/student/:id", VerifyToken, studentController.updateStudent);

export default route;
