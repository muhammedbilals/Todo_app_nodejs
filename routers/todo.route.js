const router = require('express').Router();
const todoController =require('../controller/todo.controller')

router.post('/createTodo',todoController.createTodo)
router.get('/getTodo',todoController.getTodo)
router.delete('/deleteTodo',todoController.deleteTodo)
router.put('/updateTodo',todoController.updateTodo)

module.exports =router;