const express = require('express')
const {
	getTodos,
	addTodo,
	deleteTodo,
	updateTodo
} = require('../controllers/todo_controller')

const router = express.Router()

router.get('/', getTodos)
router.post('/', addTodo)
router.delete('/:id', deleteTodo)
router.patch('/:id', updateTodo)

module.exports = router
