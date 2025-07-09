'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ProgramaEstudio extends Model {
    static associate(models) {
      ProgramaEstudio.belongsTo(models.Institucion, { foreignKey: 'institucionId' });
      ProgramaEstudio.hasMany(models.Estudiante, { foreignKey: 'programaId' });
    }
  }

  ProgramaEstudio.init({
    nombre: DataTypes.STRING,
    institucionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProgramaEstudio',
    tableName: 'programas_estudio',
    timestamps: false
  });

  return ProgramaEstudio;
};
