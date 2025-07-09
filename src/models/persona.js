'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Persona extends Model {
    static associate(models) {
      Persona.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
      Persona.hasOne(models.Estudiante, { foreignKey: 'personaId' });
      Persona.hasOne(models.Tutor, { foreignKey: 'personaId' });
    }
  }

  Persona.init({
    usuarioId: { type: DataTypes.INTEGER, allowNull: false },
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    dniCe: { type: DataTypes.STRING, unique: true },
    edad: DataTypes.INTEGER,
    sexo: DataTypes.STRING,
    estadoCivil: DataTypes.STRING,
    trabaja: DataTypes.BOOLEAN,
    viveConPadres: DataTypes.BOOLEAN,
    ieEgreso: DataTypes.STRING,
    pais: DataTypes.STRING,
    region: DataTypes.STRING,
    provincia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
    tableName: 'personas',
    timestamps: false
  });

  return Persona;
};
