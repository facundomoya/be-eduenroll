export const config = {
  dataBase: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    name: 'eduenroll',
    activate_login: true
  },

  JWT: {
    JWT_PRIVATE_KEY: 'mi_clave_privada_jwt',
    EXPIRES_IN: '1d',
    JWT_ALGORITHM: 'HS256'
  }
}
