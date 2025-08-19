export const config = {
  dataBase: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    activate_login: process.env.ACTIVATE_LOGIN
  },

  JWT: {
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
    EXPIRES_IN: process.env.EXPIRES_IN,
    JWT_ALGORITHM: process.env.JWT_ALGORITHM
  }
}
