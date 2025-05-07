require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const connectDB = require('./config/db');  // MongoDB connection setup
const userRoutes = require('./routes/userRoutes');  // Import user routes
const taskRoutes = require('./routes/taskRoutes');  // Import task routes
const commentRoutes = require('./routes/commentRoutes');  // Import comment routes
const swaggerDocs = require('./swagger/swagger');  // Import Swagger documentation setup

const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Connect to MongoDB
connectDB();

// Register API routes
app.use('/api', userRoutes);  // User routes at /api
app.use('/api', taskRoutes);  // Task routes at /api
app.use('/api', commentRoutes);  // Comment routes at /api

// Set up Swagger documentation at /api-docs
swaggerDocs(app);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
