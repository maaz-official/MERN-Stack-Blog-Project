import jwt from "jsonwebtoken";
import { errorHandler } from './error.js'

export function verifyToken(req, res, next) {
    // Retrieve the JWT token from the request cookies
    const token = req.cookies.access_token;
    
    // If the token is missing, return a 401 Unauthorized error
    if (!token) {
        return next(errorHandler(401, 'Unauthorized'));
    }

    // Verify the JWT token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        // If there's an error verifying the token, return a 401 Unauthorized error
        if (err) {
            return next(errorHandler(401, 'Unauthorized'));
        }
        
        // If the token is valid, attach the user information to the request object
        req.user = user;
        
        // Proceed to the next middleware
        next();
    });
}
