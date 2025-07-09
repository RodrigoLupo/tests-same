'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class GrupoPregunta extends Model {
    static associate(models) {
      GrupoPregunta.belongsTo(models.Cuestionario, { foreignKey: 'cuestionarioId' });
      GrupoPregunta.hasMany(models.Pregunta, { foreignKey: 'grupoId' });
    }
  }

  GrupoPregunta.init({
    cuestionarioId: DataTypes.INTEGER,
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GrupoPregunta',
    tableName: 'grupos_pregunta',
    timestamps: false
  });

  return GrupoPregunta;
};
