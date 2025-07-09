'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Autorizacion extends Model {
    static associate(models) {
      Autorizacion.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
    }
  }

  Autorizacion.init({
    usuarioId: DataTypes.INTEGER,
    tipoAcceso: DataTypes.STRING,
    aprobadoPor: DataTypes.INTEGER,
    fechaAutorizacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    sequelize,
    modelName: 'Autorizacion',
    tableName: 'autorizaciones',
    timestamps: false
  });

  return Autorizacion;
};
