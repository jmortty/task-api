const User = require('../models/user');

// Update user by ID
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, role } = req.body;

        // Find user by ID and update it
        const user = await User.findByIdAndUpdate(id, { name, email, password, role }, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Other CRUD functions like getUserById, createUser, etc., should be defined here as well.
