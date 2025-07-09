const sequelize = require('../config/database');
const fs = require('fs');
const path = require('path');

const models = {};

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js' && file.endsWith('.js'))
  .forEach(file => {
    const modelDef = require(path.join(__dirname, file));
    if (typeof modelDef === 'function') {
      const model = modelDef(sequelize);
      models[model.name] = model;
    } else {
      console.warn(`⚠️ El archivo ${file} no exporta una función`);
    }
  });

Object.values(models).forEach(model => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = sequelize.Sequelize;

module.exports = models;