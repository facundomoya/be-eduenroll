import { check } from "express-validator";
import { passwordValidator } from "./common.validator.js";
import User from "../models/user.model.js";
import validateResult from "../helpers/validateResult.js";

const userCreateValidator = [
    check('user.user_name')
        .exists().withMessage('Username is required')
        .isLength({ min: 6 }).withMessage('Username must be at least 6 characters long')
        .custom(async (value) => {
            const user = await User.findOne({ where: { user_name: value } });
            if (user) {
                throw new Error('Username already in use');
            }
        }),
    passwordValidator,
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const userUpdateValidator = [
    passwordValidator,
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

export { userCreateValidator, userUpdateValidator };