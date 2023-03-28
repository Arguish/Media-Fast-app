require('dotenv').config()

const express = require('express')
const api = express()
const morgan = require('morgan')
const env = process.env
const {checkConnection} = require('./db/index.db.js')


function initializeAndListenWithExpress() {
	const api = express()
		.use(morgan('dev'))
		.use(express.json())
		//.use('/api', require('./api/routes'))

		.listen(env.PORT, () => {
			console.log(`> Listening on port: ${env.PORT}`)
		})
}

async function startAPI() {
	await initializeAndListenWithExpress()
}

startAPI()
