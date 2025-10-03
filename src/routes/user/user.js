import express from "express";
import { userController } from "../../controllers/user.controller.js";
import VerifyToken from "../../middleware/verifyToken.js";
import userValidator from "../../validators/user.validator.js";

const route = express.Router();

route.get("/user", VerifyToken, userController.getAllUsers);
route.get("/user/:id", VerifyToken, userController.getUser);
route.post("/user/administrator", userValidator, userController.addAdminUser);
route.post("/user/professor", VerifyToken, userController.addProfessorUser);
route.delete("/user/:id", VerifyToken, userController.deleteUser);
route.put("/user/:id", VerifyToken, userController.updateUser);

export default route;
