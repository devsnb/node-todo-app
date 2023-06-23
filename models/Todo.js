const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
	task: {
		type: String,
		required: true
	},
	category: String,
	dueDate: Date,
	completed: Boolean
})

const TodoModel = mongoose.model('todo', todoSchema)

module.exports = TodoModel
