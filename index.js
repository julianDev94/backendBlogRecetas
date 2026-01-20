import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

// 1- Configuro un puerto para el servidor
const app = express();

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto' + app.get('port'));
});

