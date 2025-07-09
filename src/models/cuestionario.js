'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Cuestionario extends Model {
    static associate(models) {
      Cuestionario.hasMany(models.Pregunta, { foreignKey: 'cuestionarioId' });
      Cuestionario.hasMany(models.GrupoPregunta, { foreignKey: 'cuestionarioId' });
      Cuestionario.hasMany(models.Resultado, { foreignKey: 'cuestionarioId' });
    }
  }

  Cuestionario.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    fechaCreacion: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW }
  }, {
    sequelize,
    modelName: 'Cuestionario',
    tableName: 'cuestionarios',
    timestamps: false
  });

  return Cuestionario;
};
