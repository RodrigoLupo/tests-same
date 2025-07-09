'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasOne(models.Persona, { foreignKey: 'usuarioId' });
      Usuario.hasMany(models.Autorizacion, { foreignKey: 'usuarioId' });
    }
  }

  Usuario.init({
    correo: { type: DataTypes.STRING, allowNull: false, unique: true },
    contrasena: { type: DataTypes.TEXT, allowNull: false },
    rol: { type: DataTypes.STRING, allowNull: false },
    estado: { type: DataTypes.BOOLEAN, defaultValue: true },
    fechaRegistro: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: false
  });

  return Usuario;
};
