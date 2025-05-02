const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

const config = require('../config/config'); // adjust the path as needed

//const env = process.env.NODE_ENV || 'development';
const dbConfig = config["development"]; // gets the 'development' object

const sequelize = new Sequelize(dbConfig.database, dbConfig.username,  dbConfig.password, {
  host:  dbConfig.host,
  dialect: 'postgres',
  logging: false,
});

const db = {};

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js' && file.endsWith('.js'))
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected.');
 //   return sequelize.sync(); // Optional: { force: true } or { alter: true }
  })
  .then(() => {
    console.log('✅ Database synced.');
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
