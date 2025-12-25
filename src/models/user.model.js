import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";
import Administrator from "./administrator.model.js";
import Professor from "./professor.model.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("0", "1"), // 0: Administrator, 1: Professor
      allowNull: false
    }
  },
  {
    timestamps: true,
    tableName: "user",
    paranoid: true,
  }
);

//User - Administrator
User.hasOne(Administrator, {
  foreignKey: "id_user",
  sourceKey: "id",
});

Administrator.belongsTo(User, {
  foreignKey: "id_user",
  targetKey: "id",
  onDelete: 'CASCADE', // Esto borra el Administrator si borras el User
});

//User - Professor
User.hasOne(Professor, {
  foreignKey: "id_user",
  sourceKey: "id",
});

Professor.belongsTo(User, {
  foreignKey: "id_user",
  targetKey: "id"
});

export default User;
