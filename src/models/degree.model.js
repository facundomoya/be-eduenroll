import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";

const Degree = sequelize.define("Degree", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    degreeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: true,
    tableName: "degree",
    paranoid: true
});

export default Degree;
