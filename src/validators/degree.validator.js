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

export const degreeValidator = {
    degreeCreateValidator,
    degreeUpdateValidator
};