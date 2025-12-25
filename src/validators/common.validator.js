import { check } from "express-validator";
import User from "../models/user.model.js";

const userNameValidator = check('user.user_name')
    .exists().withMessage('Username is required')
    .isLength({ min: 6 }).withMessage('Username must be at least 6 characters long')
    .custom(async (value) => {
        const user = await User.findOne({ where: { user_name: value } });
        if (user) {
            throw new Error('Username already in use');
        }
    });

const userTypeValidator = check('user.type')
    .exists().withMessage('User type is required')
    .isIn(['0', '1']).withMessage('User type must be either 0 (Administrator) or 1 (Professor)');

const passwordValidator = check('user.password')
    .exists().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long');

const userUpdateValidator = [
    passwordValidator,
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

export const commonValidator =
{
    userNameValidator,
    passwordValidator,
    userTypeValidator,
    userUpdateValidator
};