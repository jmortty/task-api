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
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        email: { type: 'string' },
                        password: { type: 'string' },
                        role: { type: 'string', enum: ['admin', 'user'], default: 'user' },
                    },
                    required: ['name', 'email', 'password'],
                },
                Task: {
                    type: 'object',
                    properties: {
                        title: { type: 'string' },
                        description: { type: 'string' },
                        status: { type: 'string', enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
                    },
                    required: ['title', 'description', 'status'],
                },
                // Define other models like Label, Comment, etc.
            },
        },
    },
    apis: ['./routes/*.js'],  // Path to the route files that contain Swagger annotations
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));  // Swagger route
};

module.exports = swaggerDocs;
