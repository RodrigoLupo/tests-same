'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Pregunta extends Model {
    static associate(models) {
      Pregunta.belongsTo(models.Cuestionario, { foreignKey: 'cuestionarioId' });
      Pregunta.belongsTo(models.TipoPregunta, { foreignKey: 'tipoId' });
      Pregunta.belongsTo(models.GrupoPregunta, { foreignKey: 'grupoId' });
      Pregunta.hasMany(models.RespuestaPosible, { foreignKey: 'preguntaId' });
    }
  }

  Pregunta.init({
    cuestionarioId: DataTypes.INTEGER,
    enunciado: DataTypes.TEXT,
    tipoId: DataTypes.INTEGER,
    grupoId: DataTypes.INTEGER,
    orden: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pregunta',
    tableName: 'preguntas',
    timestamps: false
  });

  return Pregunta;
};
