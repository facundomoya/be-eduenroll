import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('eduenroll', 'root', '1234', {
    dialect: "mysql",
    host: 'localhost',
    port: 3306,
    logging: false
});
