'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Institucion extends Model {
    static associate(models) {
      Institucion.hasMany(models.ProgramaEstudio, { foreignKey: 'institucionId' });
      Institucion.hasMany(models.Tutor, { foreignKey: 'institucionId' });
    }
  }

  Institucion.init({
    nombre: { type: DataTypes.STRING, unique: true }
  }, {
    sequelize,
    modelName: 'Institucion',
    tableName: 'instituciones',
    timestamps: false
  });

  return Institucion;
};
