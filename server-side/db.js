import mongoose from 'mongoose';
import {config} from './config/config.js';

const MONGODB_URI = config.MONGO_URL;

mongoose.connect(MONGODB_URI, {
  
});

mongoose.connection.on('connected', () => {
  console.log('Conectado a la base de datos MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error('Error al conectar a la base de datos MongoDB:', error);
});