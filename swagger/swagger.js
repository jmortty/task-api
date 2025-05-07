const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Define Swagger options
const options = {
    definition: {
        openapi: '3.0.0',  // OpenAPI version
        info: {
            title: 'Task Management API',  // API title
            version: '1.0.0',  // API version
            description: 'A Task Management API using Node.js, MongoDB',  // API description
        },
    },
    apis: ['./routes/*.js'],  // Paths to the route files that contain Swagger annotations
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));  // Swagger route
};

// Export the swaggerDocs function
module.exports = swaggerDocs;
