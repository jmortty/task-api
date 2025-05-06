const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const labelRoutes = require('./routes/labelRoutes');
const commentRoutes = require('./routes/commentRoutes');
const taskRoutes = require('./routes/taskRoutes');
const swaggerDocs = require('./swagger/swagger');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Root Route: This will handle requests to "/"
app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API!');
});

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
