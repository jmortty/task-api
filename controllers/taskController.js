const Task = require('../models/task');
const User = require('../models/user');
const Label = require('../models/label');
const Comment = require('../models/comment');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { title, description, dueDate, status, assignedTo, labels, comments } = req.body;

        const user = await User.findById(assignedTo);
        if (!user) {
            return res.status(404).json({ message: 'Assigned user not found' });
        }

        const labelDocs = await Label.find({ '_id': { $in: labels } });
        if (labelDocs.length !== labels.length) {
            return res.status(404).json({ message: 'One or more labels not found' });
        }

        const commentDocs = await Comment.find({ '_id': { $in: comments } });
        if (commentDocs.length !== comments.length) {
            return res.status(404).json({ message: 'One or more comments not found' });
        }

        const task = new Task({
            title, description, dueDate, status, assignedTo, labels, comments
        });

        await task.save();

        user.tasksAssigned.push(task._id);
        await user.save();

        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
