import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";
import Professor from "./professor.model.js";
import Degree from "./degree.model.js";

const ProfessorDegree = sequelize.define("ProfessorDegree", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    timestamps: true,
    tableName: "professor_degree",
    paranoid: true
});

Professor.belongsToMany(Degree, {
    through: ProfessorDegree,
    foreignKey: 'id_professor'
});

Degree.belongsToMany(Professor, {
    through: ProfessorDegree,
    foreignKey: 'id_degree'
});

export default ProfessorDegree;
