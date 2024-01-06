const { Sequelize } = require("sequelize");

// const conn = new Sequelize(`${process.env.DIALECT}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)

const conn = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASS, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  logging: false
})


async function checkConnection() {
  try {
    await conn.authenticate();
    console.log("Connection to DB has been established successfully.");
  } catch (error) {
    throw error;
  }
}

async function syncModels(value) {
  const state = {
    alter: { alter: true },
    force: { force: true },
  };

  try {
    await conn.sync(state[value] || "");
    console.log(
      `All models were synchronized successfully using sync(${JSON.stringify(state[value]) || ""
      }).`
    );
  } catch (error) {
    throw error;
  }
}


module.exports = { checkConnection, syncModels, conn }
