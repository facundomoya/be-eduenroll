import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";

const UserPdf = sequelize.define(
  "UserPdf",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pdf_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
    tableName: "user_pdf",
  }
);

export default UserPdf;
