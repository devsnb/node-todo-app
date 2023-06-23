const TodoModel = require('../models/Todo')

/**
 * Returns all existing todos
 * @path 			GET /todo
 */
const getTodos = async (req, res) => {
	const todos = await TodoModel.find()
	res.json(todos)
}

/**
 * Adds a todo to the existing todos
 * @path 			POST /todo
 */
const addTodo = async (req, res) => {
	await TodoModel.create({
		task: req.body.task,
		category: req.body.category,
		dueDate: req.body.due || Date.now(),
		completed: false
	})
	res.redirect('back')
}

/**
 * Deletes a todo
 * @path 			DELETE /todo/:id
 */
const deleteTodo = async (req, res) => {
	const id = req.params?.id

	await TodoModel.findByIdAndDelete(id)

	res.json({
		message: 'Successfully Deleted'
	})
}

/**
 * Updates a todo
 * @path 			PATCH /todo/:id
 */
const updateTodo = async (req, res) => {
	const id = req.params?.id
	let foundTodo = await TodoModel.findById(id)

	foundTodo.completed = !foundTodo.completed

	await foundTodo.save()

	res.json({
		message: 'Successfully Updated'
	})
}

module.exports = { getTodos, addTodo, deleteTodo, updateTodo }
