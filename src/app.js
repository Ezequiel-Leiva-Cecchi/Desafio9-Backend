// src/app.js
import express from "express";
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import productsRoutes from "./routes/product.routes.js";
import { customErrors } from "./middleware/errorMiddleware.js";
import logger from './utils/logger.js'; 

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(customErrors);

app.get('/loggerTest', (req, res) => {
    logger.info('Text info');
    logger.warning('This is a warning');
    logger.error('This is an error');
    logger.fatal('This is a fatal error');
    logger.debug('This is a debug');
    res.send({ message: 'Logs tested successfully' });
});

app.use('/api/user', userRoutes);
app.use('/api/products', productsRoutes); 

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
