import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";
import Course from "./course.model.js";
import Degree from "./degree.model.js";

const CourseDegree = sequelize.define("course_degree", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    timestamps: true,
    tableName: "course_degree",
    paranoid: true
});

Course.belongsToMany(Degree, {
    through: CourseDegree,
    foreignKey: 'id_course'
});

Degree.belongsToMany(Course, {
    through: CourseDegree,
    foreignKey: 'id_degree'
});

export default CourseDegree;
