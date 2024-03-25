import { Router } from "express";
import { generateUser } from '../utils/mock.js';
import { errorDictionary } from '../middleware/errorMiddleware.js';
import logger from '../utils/logger.js'; 

const userRoutes = Router();

userRoutes.get('/', (req, res, next) => {
    try {
        const users = [];
        for(let i = 0; i < 100; i++){
            users.push(generateUser());
        }
        res.json({ status: 'success', payload: users });
    } catch (error) {
        const errorMessage = errorDictionary[error.message] || 'An unexpected error occurred';
        logger.error(errorMessage); 
        res.status(500).json({ status: 'error', message: errorMessage });
        next(error);
    }
});

export default userRoutes;
