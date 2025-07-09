require('dotenv').config();
const app = require('./config/app');
const sequelize = require('./config/database');
const models = require('./models');

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  console.log('✅ Tablas sincronizadas con Sequelize');

  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('❌ Error conectando a MySQL:', err);
});
