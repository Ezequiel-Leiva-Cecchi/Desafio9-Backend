// src/routes/product.routes.js
import { Router } from "express";
import { generateProduct } from '../utils/mock.js'; 
import { errorDictionary } from '../middleware/errorMiddleware.js'; 
import logger from '../utils/logger.js'; // Importar el logger

const productsRoutes = Router();

productsRoutes.get('/mockingproducts', (req, res, next) => {
    try {
        const products = [];
        for(let i = 0; i < 100; i++){
            products.push(generateProduct()); 
        }
        res.json({ status: 'success', payload: products }); 
    } catch (error) {
        const errorMessage = errorDictionary[error.message] || 'An unexpected error occurred';
        logger.error(errorMessage);
        res.status(500).json({ status: 'error', message: errorMessage });
    }
});

export default productsRoutes;
