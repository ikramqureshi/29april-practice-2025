const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
  }
);

const db = {};
const modelsPath = __dirname;
console.log('dirname',modelsPath)

fs.readdirSync(modelsPath)
  .filter(file => file !== 'index.js' && file.endsWith('.js'))
  .forEach(file => {
    const model = require(path.join(modelsPath, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

  //db={starters.js:{id:integer,public_id:uuid,starter_name:character.....},main_course:{id:integer,public_id.......}}

// Setup model associations if needed
Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
