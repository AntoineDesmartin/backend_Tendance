//!   import ----------------------------------------------------------------------------------------------------------------------------------
import express, { Request, Response } from 'express';
require('dotenv').config();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan')







//! connection mongoose---------------------------------------------------------------------------------------------------------------------
const mongoose = require('mongoose');
const connectionString :(string | undefined)= process.env.CONNECTION_STRING;
console.log(connectionString);
mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
    .then(() => console.log('Database connected'))
    .catch((error: Error) => console.error('Database connection error:', error));




//! import de nos routes -------------------------------------------------------------------------------------------------------------------------
import {indexRouter} from './routes/index';


//Settings
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());


app.use(express.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Route de base
app.get('/', (req: Request, res: Response) => {
  res.send('Bonjour depuis le backend Express en TypeScript !');
});
// Écoute du serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}.`);
});




//! appellation de nos routes ----------------------------------------------------------------------------------------------------------------
app.use('/', indexRouter);




module.exports = app;
