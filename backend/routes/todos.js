const express = require('express');

const Todo = require('../models/todoModel.js');

// Creating a router
const router = express.Router();

// Adding different requests handlers on the router

// GET all todos
router.get('/', (req, res) => {
    res.json({mssg: 'GET all todos'});
});

// GET a single todo
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single todo'});
});

// POST a new todo
router.post('/', async (req, res) => {
    const {title, description, completed} = req.body

    try {
        const todo = await Todo.create({title, description, completed})
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({error: error.mssg})
    }
    // res.json({mssg: 'POST a new todo'});
});

// DELETE a todo
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a todo'});
});

// UPDATE a todo
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a todo'});
});

module.exports = router;