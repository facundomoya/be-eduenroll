export const config = {
    JWT_SECRET: 'miclave', //password
    ACTIVATE_LOGIN: true,
    DB_HOST: 'localhost',
    DB_USER: 'root',
    DB_PASSWORD: '1234',
    DB_NAME: 'eduenroll',
    ACTIVATE_PERMISSION: process.env.ACTIVATE_PERMISSION == 'true' ? true : false,
  };

  export const roles_routes = {
    USUARIOS: {
    GET_USUARIOS: 'OBTENER_UN_USUARIOS',
  }
}