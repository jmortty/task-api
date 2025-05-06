const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

/**
 * @swagger
 * /api/comments:
 *   get:
 *     description: Get all comments
 *     responses:
 *       200:
 *         description: List of comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 */
router.get('/comments', commentController.getComments);

/**
 * @swagger
 * /api/comments/{id}:
 *   get:
 *     description: Get comment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The comment ID
 *     responses:
 *       200:
 *         description: A single comment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       404:
 *         description: Comment not found
 */
router.get('/comments/:id', commentController.getCommentById);

/**
 * @swagger
 * /api/comments:
 *   post:
 *     description: Create a new comment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       201:
 *         description: Comment created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 */
router.post('/comments', commentController.createComment);

/**
 * @swagger
 * /api/comments/{id}:
 *   put:
 *     description: Update an existing comment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The comment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: Comment updated
 *       404:
 *         description: Comment not found
 */
router.put('/comments/:id', commentController.updateComment);

/**
 * @swagger
 * /api/comments/{id}:
 *   delete:
 *     description: Delete a comment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The comment ID
 *     responses:
 *       200:
 *         description: Comment deleted
 *       404:
 *         description: Comment not found
 */
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;
