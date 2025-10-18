import { check } from "express-validator";
import {commonValidator } from "./common.validator.js";
import Administrator from "../models/administrator.model.js";
import validateResult from "../helpers/validateResult.js";

const userAdministratorCreateValidator = [
    commonValidator.userNameValidator,
    commonValidator.passwordValidator,
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
            const admin = await Administrator.findOne({where: {administratorId: value}});
            if (admin) {
                throw new Error('AdministratorId is already in use');
            }
        }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

export const userAdministratorValidator = { userAdministratorCreateValidator };