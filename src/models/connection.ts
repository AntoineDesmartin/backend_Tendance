const mongoose = require('mongoose');

const connectionString:(string | undefined)= process.env.CONNECTION_STRING;

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch((error:Error) => console.error("dataBase connected"));


