const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/mongoose')

dotenv.config()
const PORT = process.env.PORT || 8000
const app = express()

// Connect to the database
connectDb()

// Parsing the incoming request
app.use(
	express.urlencoded({
		extended: false
	})
)

app.use(express.json())

// Serving the static assets
app.use(express.static('public'))

// Setting the router
app.use('/', require('./routes'))

// Setting the ejs view engine
app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(PORT, err => {
	if (err) {
		console.error('Could not start server')
		process.exit(1)
	} else {
		console.log(`Server started on port: ${PORT}`)
	}
})
