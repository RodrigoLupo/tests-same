'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Resultado extends Model {
    static associate(models) {
      Resultado.belongsTo(models.Estudiante, { foreignKey: 'estudianteId' });
      Resultado.belongsTo(models.Cuestionario, { foreignKey: 'cuestionarioId' });
    }
  }

  Resultado.init({
    estudianteId: DataTypes.INTEGER,
    cuestionarioId: DataTypes.INTEGER,
    puntajeTotal: DataTypes.INTEGER,
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    sequelize,
    modelName: 'Resultado',
    tableName: 'resultados',
    timestamps: false
  });

  return Resultado;
};
