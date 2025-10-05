import { Sequelize } from "sequelize";
import { config } from "../config/config.js";

export const sequelize = new Sequelize(config.database.name, config.database.user, config.database.password, {
    dialect: "mysql",
    host: config.database.host,
    port: config.database.port,
    logging: false
});
