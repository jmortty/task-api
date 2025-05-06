const Task = require('../models/task');

// Update task by ID
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status, assignedTo, labels, comments } = req.body;

        const task = await Task.findByIdAndUpdate(id, { title, description, status, assignedTo, labels, comments }, { new: true });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Other CRUD functions like getTasks, createTask, etc., should be defined here as well.
