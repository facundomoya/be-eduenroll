import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import { userService } from '../services/user.service.js';
import { mixParams } from '../utils/formatData.utils.js';

export const VerifyToken = async (req, res, next) => {
    if (!Boolean(config.dataBase.activate_login)) return next();
    
    try {
        const params = mixParams(req);
        
        const authorization = params.headers?.authorization || 
                             req.headers?.authorization;
        
        if (!authorization) {
            throw new Error('Authorization token not found.');
        }
        
        const token = authorization.split(' ')[1];
        
        if (!token) {
            throw new Error('Invalid token format. Use: Bearer <token>');
        }

        const decoded = jwt.verify(token, config.JWT.JWT_PRIVATE_KEY);
        
        const { data: user, error } = await userService.getUser({ 
            id: decoded.id 
        });

        req.user = {
            id: user.id,
            user_name: user.user_name,
            password: user.password,
        };

        next();
        
    } catch (error) {

        console.error('VerifyToken error.', error.message);
        return res.status(403).json(({
            error: error.message,
            code: 403
        }));
    }
};
