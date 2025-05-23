// middlewares/verifyToken.js
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import { userServices } from '../services/user.services.js';
import { mixParams } from '../utils/formatData.utils.js';

export const VerifyToken = async (req, res, next) => {
    if (!Boolean(config.ACTIVATE_LOGIN)) return next();
    
    try {
        //debugger
        // 1. Obtener todos los parámetros consolidados
        const params = mixParams(req);
        
        // 2. Obtener el header Authorization
        const authorization = params.headers?.authorization || 
                             req.headers?.authorization;
        
        if (!authorization) {
            throw new Error('Se necesita token de autenticación');
        }
        
        // 3. Extraer el token (formato: "Bearer token")
        const token = authorization.split(' ')[1];
        
        if (!token) {
            throw new Error('Formato de token inválido. Use: Bearer <token>');
        }
        
        // 4. Verificar el token JWT
        const decoded = jwt.verify(token, config.JWT_SECRET);
        
        // 5. Verificar que el usuario existe en la base de datos
        const { data: user, error } = await userServices.getUser({ 
            id: decoded.id 
        });
        
      
        
        // 6. Adjuntar información del usuario al request
        req.user = {
            id: user.id,
            user_name: user.user_name,
            password: user.password,
        };

        
        
        // 7. Pasar al siguiente middleware/controlador
        next();
        
    } catch (error) {
        // 8. Manejar errores
        console.error('Error en VerifyToken:', error.message);
        return res.status(403).json(({
            error: error.message,
            code: 403
        }));
    }
};
