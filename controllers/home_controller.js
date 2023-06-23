const TodoModel = require('../models/Todo')

/**
 * Renders the home screen
 * @path 			GET /
 */
const homeScreen = async (req, res) => {
	const todos = await TodoModel.find({})

	// rendering the home.ejs template
	res.render('home', { todos })
}

module.exports = { homeScreen }
