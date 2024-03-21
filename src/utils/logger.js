// src/utils/logger.js
import winston from 'winston';

const customLevelOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug: 4
    },
    colors: {
        fatal: 'red',
        error: 'magenta',
        warning: 'yellow',
        info: 'blue',
        debug: 'white'
    }
};

const developmentLogger = winston.createLogger({
    levels: customLevelOptions.levels,
    transports: [
        new winston.transports.Console({
            level: 'debug', // Loguear a partir del nivel debug en desarrollo
            format: winston.format.combine(
                winston.format.colorize({ colors: customLevelOptions.colors }),
                winston.format.simple()
            )
        })
    ]
});

const productionLogger = winston.createLogger({
    levels: customLevelOptions.levels,
    transports: [
        new winston.transports.Console({
            level: 'info', // Loguear a partir del nivel info en producción
            format: winston.format.combine(
                winston.format.colorize({ colors: customLevelOptions.colors }),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: 'errors.log',
            level: 'error' // Enviar logs de nivel error a un archivo en producción
        })
    ]
});

export default process.env.NODE_ENV === 'production' ? productionLogger : developmentLogger;
