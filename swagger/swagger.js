const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Management API',
            version: '1.0.0',
            description: 'A Task Management API using Node.js, MongoDB',
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
                        dueDate: { type: 'string', format: 'date' },
                        status: { type: 'string', enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
                        assignedTo: { type: 'string' },
                        labels: { type: 'array', items: { type: 'string' } },
                        comments: { type: 'array', items: { type: 'string' } },
                    },
                    required: ['title', 'description', 'assignedTo'],
                },
                Label: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        color: { type: 'string' },
                    },
                    required: ['name', 'color'],
                },
                Comment: {
                    type: 'object',
                    properties: {
                        text: { type: 'string' },
                        createdBy: { type: 'string' },
                        task: { type: 'string' },
                    },
                    required: ['text', 'createdBy', 'task'],
                },
            },
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
