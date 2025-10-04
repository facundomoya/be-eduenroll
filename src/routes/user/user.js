import express from "express";
import { userController } from "../../controllers/user.controller.js";
import VerifyToken from "../../middleware/verifyToken.js";
import { userCreateValidator, userUpdateValidator } from "../../validators/user.validator.js";

const route = express.Router();

route.get("/users", userController.getAllUsers);
route.get("/user/:id", VerifyToken, userController.getUser);
route.post("/user/administrator", userCreateValidator, userController.addAdminUser);
route.post("/user/professor", VerifyToken, userController.addProfessorUser);
route.delete("/user/:id", VerifyToken, userController.deleteUser);
route.put("/user/:id", userUpdateValidator, userController.updateUserPassword);

export default route;
