const Comment = require('../models/comment');

// Update comment by ID
exports.updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { text, createdBy, taskId } = req.body;

        const comment = await Comment.findByIdAndUpdate(id, { text, createdBy, task: taskId }, { new: true });

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Other CRUD functions like getComments, createComment, etc., should be defined here as well.
