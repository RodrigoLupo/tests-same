'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Tutor extends Model {
    static associate(models) {
      Tutor.belongsTo(models.Persona, { foreignKey: 'personaId' });
      Tutor.belongsTo(models.Institucion, { foreignKey: 'institucionId' });
      Tutor.hasMany(models.TutorEstudiante, { foreignKey: 'tutorId' });
    }
  }

  Tutor.init({
    personaId: { type: DataTypes.INTEGER, allowNull: false },
    institucionId: { type: DataTypes.INTEGER, allowNull: false },
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tutor',
    tableName: 'tutores',
    timestamps: false
  });

  return Tutor;
};
