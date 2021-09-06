import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'

export default function authMiddlware(req: Request, res: Response, next: NextFunction) {
    try {
      const { headers } = req;
      const { authorization } = headers
      if (!authorization) {
        return res.status(403).json({ status: 'error', message: 'Token is invalid'})
      }
      const [, token] = authorization.split(' ')
      const { userId } = jwt.decode(token) as { userId: string }
      
      req.body.userId = userId;

      return next();
    } catch (err) {
      return res.status(401).json({ message: "not authorized" });
    }
};
