import { check } from "express-validator";
import User from "../models/user.model.js";
import Administrator from "../models/administrator.model.js";
import validateResult from "../helpers/validateResult.js";

const userValidator = [
    check('user.user_name')
    .exists().withMessage('Username is required')
    .isLength({ min: 6 }).withMessage('Username must be at least 6 characters long')
    .custom(async (value) => {
        const user = await User.findOne({ where: { user_name: value } });
        if (user) {
            throw new Error('Username already in use');
        }
    }),
    check('user.password')
        .exists().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    check('admin.administratorId')
        .exists().withMessage('Administrator ID is required')
        .isInt().withMessage('Administrator ID must be an integer')
        .custom(async (value) => {
            const admin = await Administrator.findOne({where: { administratorId: value }});
            if (admin) {
                throw new Error('Administrator ID already in use');
            }
        }),
    check('admin.email')
        .exists().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .custom(async (value) => {
            const admin = await Administrator.findOne({ where: { email: value } });
            if (admin) {
                throw new Error('Email already in use');
            }
        }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

export default userValidator;