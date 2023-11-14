const express = require('express');
const {
    createTodo,
    getTodo,
    getTodos,
    deleteTodo,
    updateTodo
} = require('../controllers/todoController');

// Creating a router
const router = express.Router();

// Adding different requests handlers on the router

// GET all todos
router.get('/', getTodos);

// GET a single todo
router.get('/:id',getTodo);

// POST a new todo
router.post('/', createTodo);

// DELETE a todo
router.delete('/:id', deleteTodo);

// UPDATE a todo
router.patch('/:id', updateTodo);

module.exports = router;