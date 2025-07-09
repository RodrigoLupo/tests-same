'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class RespuestaEstudiante extends Model {
    static associate(models) {
      RespuestaEstudiante.belongsTo(models.Estudiante, { foreignKey: 'estudianteId' });
      RespuestaEstudiante.belongsTo(models.Pregunta, { foreignKey: 'preguntaId' });
      RespuestaEstudiante.belongsTo(models.RespuestaPosible, { foreignKey: 'respuestaId' });
    }
  }

  RespuestaEstudiante.init({
    estudianteId: DataTypes.INTEGER,
    preguntaId: DataTypes.INTEGER,
    respuestaId: DataTypes.INTEGER,
    fechaRespuesta: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    sequelize,
    modelName: 'RespuestaEstudiante',
    tableName: 'respuestas_estudiantes',
    timestamps: false
  });

  return RespuestaEstudiante;
};
