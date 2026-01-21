import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import rutasRecetas from './src/routes/receta.routes.js';
import './src/database/conexionDB.js'
// 1- Configuro un puerto para el servidor
const app = express();

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
    console.log('Servidor configurado en puerto ' + app.get('port'));
});

// 2- Configuro los middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// 3- configuro las rutas
app.use('/api',rutasRecetas);
