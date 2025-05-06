const Label = require('../models/label');

// Create a new label
exports.createLabel = async (req, res) => {
    try {
        const { name, color } = req.body;
        const existingLabel = await Label.findOne({ name });

        if (existingLabel) {
            return res.status(400).json({ message: 'Label already exists' });
        }

        const label = new Label({ name, color });
        await label.save();
        res.status(201).json(label);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all labels
exports.getLabels = async (req, res) => {
    try {
        const labels = await Label.find();
        res.status(200).json(labels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
