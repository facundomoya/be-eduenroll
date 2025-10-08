import express from "express";
import { userController } from "../../controllers/user.controller.js";
import VerifyToken from "../../middleware/verifyToken.js";
import { userCreateValidator, userUpdateValidator } from "../../validators/user.validator.js";
import { administratorCreateValidator } from "../../validators/administrator.validator.js";
import { professorCreateValidator } from "../../validators/professor.validator.js";

const route = express.Router();

route.get("/users", userController.getAllUsers);
route.get("/user/:id", userController.getUser);
route.post("/user/administrator", VerifyToken, userCreateValidator, administratorCreateValidator, userController.addAdminUser);
route.post("/user/professor", VerifyToken, userCreateValidator, professorCreateValidator, userController.addProfessorUser);
route.delete("/user/:id", VerifyToken, userController.deleteUser);
route.put("/user/:id", VerifyToken, userUpdateValidator, userController.updateUserPassword);

export default route;
