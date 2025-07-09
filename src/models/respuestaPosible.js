'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class RespuestaPosible extends Model {
    static associate(models) {
      RespuestaPosible.belongsTo(models.Pregunta, { foreignKey: 'preguntaId' });
    }
  }

  RespuestaPosible.init({
    preguntaId: DataTypes.INTEGER,
    texto: DataTypes.TEXT,
    valor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RespuestaPosible',
    tableName: 'respuestas_posibles',
    timestamps: false
  });

  return RespuestaPosible;
};
