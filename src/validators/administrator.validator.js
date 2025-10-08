import { check } from "express-validator";
import Administrator from "../models/administrator.model.js";
import validateResult from "../helpers/validateResult.js";
import { emailAdminValidator } from "./common.validator.js";

const administratorCreateValidator = [
    check('admin.administratorId')
        .exists().withMessage('Administrator ID is required')
        .isInt().withMessage('Administrator ID must be an integer')
        .custom(async (value) => {
            const admin = await Administrator.findOne({ where: { administratorId: value } });
            if (admin) {
                throw new Error('Administrator ID already in use');
            }
        }),
    emailAdminValidator,
    check('admin.age')
        .exists().withMessage('Age is required')
        .isInt({ min: 0 }).withMessage('Age must be a positive integer'),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const administratorUpdateValidator = [
    emailAdminValidator,
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

export { administratorCreateValidator, administratorUpdateValidator };