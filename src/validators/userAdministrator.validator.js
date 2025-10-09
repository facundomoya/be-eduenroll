import { check } from "express-validator";
import { passwordValidator, userNameValidator } from "./common.validator.js";
import Administrator from "../models/administrator.model.js";
import validateResult from "../helpers/validateResult.js";

const userAdministratorCreateValidator = [
    userNameValidator,
    passwordValidator,
    check('admin.email')
        .exists().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .custom(async (value) => {
            const admin = await Administrator.findOne({ where: { email: value } });
            if (admin) {
                throw new Error('Email already in use');
            }
        }),
    check('admin.administratorId')
        .exists().withMessage('AdministratorId is required')
        .custom(async (value) => {
            console.log(value)
            const admin = await Administrator.findOne({where: {administratorId: value}});
            if (admin) {
                throw new Error('AdministratorId is already in use');
            }
        }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

export { userAdministratorCreateValidator };