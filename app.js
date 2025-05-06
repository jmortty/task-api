require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // MongoDB connection setup
const userRoutes = require('./routes/userRoutes'); // User routes
const labelRoutes = require('./routes/labelRoutes'); // Label routes
const commentRoutes = require('./routes/commentRoutes'); // Comment routes
const taskRoutes = require('./routes/taskRoutes'); // Task routes
const swaggerDocs = require('./swagger/swagger'); // Swagger documentation setup

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api', userRoutes); // User API routes
app.use('/api', labelRoutes); // Label API routes
app.use('/api', commentRoutes); // Comment API routes
app.use('/api', taskRoutes); // Task API routes

// Swagger documentation setup
swaggerDocs(app); // Set up Swagger UI

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
