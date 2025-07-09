'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class TutorEstudiante extends Model {
    static associate(models) {
      TutorEstudiante.belongsTo(models.Tutor, { foreignKey: 'tutorId' });
      TutorEstudiante.belongsTo(models.Estudiante, { foreignKey: 'estudianteId' });
    }
  }

  TutorEstudiante.init({
    tutorId: DataTypes.INTEGER,
    estudianteId: DataTypes.INTEGER,
    fechaAsignacion: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW }
  }, {
    sequelize,
    modelName: 'TutorEstudiante',
    tableName: 'tutores_estudiantes',
    timestamps: false
  });

  return TutorEstudiante;
};
