import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://eddykratochvil:VKPn84jaerGSaWzf@cluster1.v63svrj.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, {
  
});

mongoose.connection.on('connected', () => {
  console.log('Conectado a la base de datos MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error('Error al conectar a la base de datos MongoDB:', error);
});

