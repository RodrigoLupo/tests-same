'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Estudiante extends Model {
    static associate(models) {
      Estudiante.belongsTo(models.Persona, { foreignKey: 'personaId' });
      Estudiante.belongsTo(models.ProgramaEstudio, { foreignKey: 'programaId' });
      Estudiante.hasMany(models.RespuestaEstudiante, { foreignKey: 'estudianteId' });
      Estudiante.hasMany(models.Resultado, { foreignKey: 'estudianteId' });
    }
  }

  Estudiante.init({
    personaId: { type: DataTypes.INTEGER, allowNull: false },
    programaId: { type: DataTypes.INTEGER, allowNull: false },
    semestre: DataTypes.STRING,
    nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Estudiante',
    tableName: 'estudiantes',
    timestamps: false
  });

  return Estudiante;
};
