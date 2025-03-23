import {createPool} from 'mysql2/promise'
import { Sequelize } from 'sequelize';
import {DB_HOST,DB_USER,DB_PASSWORD,DB_PORT,DB_DATABASE} from './config.js'

// Crear una instancia de Sequelize
export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    logging: false,  // Puedes habilitarlo para ver las consultas SQL en la consola
  });

  // Función para probar la conexión
export const connectDB = async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexión a la base de datos exitosa');
    } catch (error) {
      console.error('No se pudo conectar a la base de datos:', error);
    }
  };

export const pool= createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})