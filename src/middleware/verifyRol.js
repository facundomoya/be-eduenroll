import { config } from "../config/config.js";

export const VerificarRoles = (rolesRequeridos) => {
  return async (req, res, next) => {
    // Validación si está activo el sistema de permisos
    if (!Boolean(config.ACTIVATE_PERMISSION)) return next();

    try {
      // Validar que el usuario ya haya sido autenticado por el middleware VerifyToken
      const user = req.user;

      if (!user || !user.role || !user.role.permisos) {
        return res.status(403).json({
          error: 'Información de permisos no disponible en el token',
          code: 403,
        });
      }

      const permisosUsuario = user.role.permisos;
      console.log(`Permisos requeridos: ${JSON.stringify(rolesRequeridos)}`);
      console.log(`Permisos del usuario: ${JSON.stringify(permisosUsuario)}`);

      // Validar que el usuario tenga todos los permisos requeridos
      const tienePermiso = rolesRequeridos.every((permiso) =>
        permisosUsuario.includes(permiso)
      );

      if (!tienePermiso) {
        return res.status(403).json({
          error: 'No tiene permisos para realizar esta acción',
          code: 403,
        });
      }else{
         console.log(`Permisos requeridos: ${JSON.stringify(rolesRequeridos)}`);
      console.log(`Permisos del usuario: ${JSON.stringify(permisosUsuario)}`);
      }

      // Si tiene los permisos, continuar
      next();
    } catch (error) {
      console.error('Error en VerificarRoles:', error.message);
      return res.status(403).json({
        error: 'Error al verificar permisos',
        code: 403,
      });
    }
  };
};
