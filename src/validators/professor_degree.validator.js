import { check } from "express-validator";
import { Op } from "sequelize";
import Degree from "../models/degree.model.js";
import ProfessorDegree from "../models/professor_degree.model.js";
import Professor from "../models/professor.model.js";
import validateResult from "../helpers/validateResult.js";

const professorDegreeCreateValidator = [
    check('id_professor')
    .exists().withMessage('Professor ID is required')
    .bail()
    .isInt().withMessage('Professor ID must be an integer')
    .bail()
    .custom(async (value) => {
        const professor = await Professor.findByPk(value);
        if (!professor) {
            throw new Error('Professor does not exist');
        }
    })
    .bail(),

    check('id_degree')
        .exists().withMessage('Degree ID is required')
        .isInt().withMessage('Degree ID must be an integer')
        .custom(async (value) => {
            const degree = await Degree.findByPk(value);
            if (!degree) {
                throw new Error('Degree does not exist');
            }
        }),

    check('id_professor')
        .custom(async (value, { req }) => {
            const existing = await ProfessorDegree.findOne({
                where: {
                    id_professor: value,
                    id_degree: req.body.id_degree
                }
            });

            if (existing) {
                throw new Error('This professor is already linked to this degree');
            }
        }),

    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const professorDegreeUpdateValidator = [
    check('id_professor')
        .exists().withMessage('Professor ID is required')
        .bail()
        .isInt().withMessage('Professor ID must be an integer')
        .bail()
        .custom(async (value) => {
            const professor = await Professor.findByPk(value);
            if (!professor) {
                throw new Error('Professor does not exist');
            }
        }),

    check('id_degree')
        .exists().withMessage('Degree ID is required')
        .bail()
        .isInt().withMessage('Degree ID must be an integer')
        .bail()
        .custom(async (value) => {
            const degree = await Degree.findByPk(value);
            if (!degree) {
                throw new Error('Degree does not exist');
            }
        })
        .custom(async (value, { req }) => {
            const existing = await ProfessorDegree.findOne({
                where: {
                    id_professor: req.body.id_professor,
                    id_degree: value,
                    id: { [Op.ne]: req.params.id }
                }
            });

            if (existing) {
                throw new Error('This professor is already linked to this degree');
            }
        }),

    (req, res, next) => validateResult(req, res, next)
];


export const professorDegreeValidator = {
    professorDegreeCreateValidator,
    professorDegreeUpdateValidator
};
