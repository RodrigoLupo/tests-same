'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class TipoPregunta extends Model {
    static associate(models) {
      TipoPregunta.hasMany(models.Pregunta, { foreignKey: 'tipoId' });
    }
  }

  TipoPregunta.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TipoPregunta',
    tableName: 'tipos_pregunta',
    timestamps: false
  });

  return TipoPregunta;
};
