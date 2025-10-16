import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";
import Course from "./course.model.js";
import Professor from "./professor.model.js";

const ProfessorCourse = sequelize.define("ProfessorCourse", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    timestamps: true,
    tableName: "professor_course",
    paranoid: true
});

Professor.belongsToMany(Course, {
    through: ProfessorCourse,
    foreignKey: 'id_professor'
});

Course.belongsToMany(Professor, {
    through: ProfessorCourse,
    foreignKey: 'id_course'
});

export default ProfessorCourse;
