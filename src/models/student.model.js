import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";
import Degree from "./degree.model.js";

const Student = sequelize.define("Student", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_degree: {  // Clave foránea para relacionar con Degree
        type: DataTypes.INTEGER,
        references: {
            model: Degree,  // Nombre del modelo al que hace referencia
            key: 'id'  // La columna a la que hace referencia
        },
        allowNull: false
    },
}, {
    timestamps: true,
    tableName: "student",
    paranoid: true
});

Student.belongsTo(Degree, {
    foreignKey: 'id_degree',
    sourceKey: 'id'
});

Degree.hasMany(Student, {
    foreignKey: 'id_degree',
    targetKey: 'id'
});

export default Student;
