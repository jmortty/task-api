const express = require('express');
const connectDB = require('./config/db');  // MongoDB connection setup
const userRoutes = require('./routes/userRoutes');  // User routes
const taskRoutes = require('./routes/taskRoutes');  // Task routes
const commentRoutes = require('./routes/commentRoutes');  // Comment routes
const swaggerDocs = require('./swagger/swagger');  // Swagger documentation setup

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api', userRoutes);  // Mount user routes at /api
app.use('/api', taskRoutes);  // Mount task routes at /api
app.use('/api', commentRoutes);  // Mount comment routes at /api

// Swagger documentation setup
swaggerDocs(app);  // Set up Swagger UI for API docs

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
