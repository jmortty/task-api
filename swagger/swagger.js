const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Define Swagger options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Management API',
            version: '1.0.0',
            description: 'A Task Management API using Node.js, MongoDB',
        },
    },
    apis: ['./routes/*.js'],  // Paths to the route files that contain Swagger annotations
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

// Export swaggerDocs function to be used in app.js
module.exports = swaggerDocs;
