export const customErrors = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ status: 'error', message: 'An error occurred on the server' });
};

export const errorDictionary = {
    PRODUCT_NOT_FOUND: 'Product not found',
    INVALID_PRODUCT_DATA: 'The product data is invalid',
    AUTHENTICATION_FAILED: 'Authentication failed',
    UNAUTHORIZED_ACCESS: 'Unauthorized access',
    INVALID_REQUEST_PARAMETERS: 'Invalid request parameters',
    DATABASE_ERROR: 'Database error',
    INTERNAL_SERVER_ERROR: 'Internal server error',
    RESOURCE_NOT_FOUND: 'Resource not found',
    DUPLICATE_RESOURCE: 'Duplicate resource',
    INVALID_DATA_FORMAT: 'Invalid data format',
    REQUEST_TIMEOUT: 'Request timeout',
    SERVICE_UNAVAILABLE: 'Service unavailable'
};
