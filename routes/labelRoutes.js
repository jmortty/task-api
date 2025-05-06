const express = require('express');
const router = express.Router();
const labelController = require('../controllers/labelController');

/**
 * @swagger
 * /api/labels:
 *   get:
 *     description: Get all labels
 *     responses:
 *       200:
 *         description: List of labels
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Label'
 */
router.get('/labels', labelController.getLabels);

/**
 * @swagger
 * /api/labels/{id}:
 *   get:
 *     description: Get label by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The label ID
 *     responses:
 *       200:
 *         description: A single label
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Label'
 *       404:
 *         description: Label not found
 */
router.get('/labels/:id', labelController.getLabelById);

/**
 * @swagger
 * /api/labels:
 *   post:
 *     description: Create a new label
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Label'
 *     responses:
 *       201:
 *         description: Label created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Label'
 */
router.post('/labels', labelController.createLabel);

/**
 * @swagger
 * /api/labels/{id}:
 *   put:
 *     description: Update an existing label
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The label ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Label'
 *     responses:
 *       200:
 *         description: Label updated
 *       404:
 *         description: Label not found
 */
router.put('/labels/:id', labelController.updateLabel);

/**
 * @swagger
 * /api/labels/{id}:
 *   delete:
 *     description: Delete a label by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The label ID
 *     responses:
 *       200:
 *         description: Label deleted
 *       404:
 *         description: Label not found
 */
router.delete('/labels/:id', labelController.deleteLabel);

module.exports = router;
