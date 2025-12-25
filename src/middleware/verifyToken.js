import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

const VerifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token not provided' });
  }
  const token = authHeader.split(' ')[1];

  const { type } = jwt.decode(token);

  if ( type !== "0" ) {
    return res.status(403).json({ message: 'Access denied for Professors' });
  }

  try {
    jwt.verify(token, config.JWT.JWT_PRIVATE_KEY);
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export default VerifyToken;