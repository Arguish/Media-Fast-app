const { Sequelize } = require('sequelize')


const conn = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
	host: process.env.HOST,
	dialect: 'mysql',
	port: process.env.DB_PORT,
	// logging: true,
})


async function checkConnection() {
	try {
		await conn.authenticate()
		console.log('Connection to DB has been established successfully.')
	} catch (error) {
		throw error
	}
}

module.exports= checkConnection