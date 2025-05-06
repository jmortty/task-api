const Comment = require('../models/comment');
const Task = require('../models/task');
const User = require('../models/user');

// Create a new comment
exports.createComment = async (req, res) => {
    try {
        const { text, createdBy, taskId } = req.body;

        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const user = await User.findById(createdBy);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const comment = new Comment({ text, createdBy, task: taskId });
        await comment.save();

        task.comments.push(comment);
        await task.save();

        user.comments.push(comment);
        await user.save();

        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
