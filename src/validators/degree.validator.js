import { check } from "express-validator";
import Degree from "../models/degree.model.js";
import validateResult from "../helpers/validateResult.js";

const degreeCreateValidator = [
    check('name')
        .exists().withMessage('Name is required')
        .custom(async (value) => {
            const degree = await Degree.findOne({ where: { name: value } });
            if (degree) {
                throw new Error('Degree already exists');
            }
        }),
    check('degreeId')
        .isLength({ min: 3, max: 10 }).withMessage('Degree ID must be between 3 and 10 characters')
        .exists().withMessage('Degree ID is required')
        .custom(async (value) => {
            const degree = await Degree.findOne({ where: { degreeId: value } });
            if (degree) {
                throw new Error('Degree ID already exists');
            }
        }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const degreeUpdateValidator = [
    check('name')
        .optional()
        .custom(async (value) => {
            const degree = await Degree.findOne({ where: { name: value } });
            if (degree) {
                throw new Error('Degree already exists');
            }
        }),
    check('degreeId')
        .optional()
        .isLength({ min: 3, max: 10 }).withMessage('Degree ID must be between 3 and 10 characters')
        .custom(async (value) => {
            const degree = await Degree.findOne({ where: { degreeId: value } });
            if (degree) {
                throw new Error('Degree ID already exists');
            }
        }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

export const degreeValidator = {
    degreeCreateValidator,
    degreeUpdateValidator
};