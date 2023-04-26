import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';

import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import viewsRouter from './routes/views.router.js';
import __dirname from './utils.js';

const app = express();

//Líneas del poder y del saber del Motor de plantilla - Handlebars
app.engine('handlebars', handlebars.engine());//setear el motor
app.set('views', `${__dirname}/views`);//apuntar a las vistas
app.set('view engine', 'handlebars');//setear cual es el motor activo, el que va a esta conectado con esas vistas; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Para poder leer o conectar con los archivos estáticos
app.use(express.static(`${__dirname}/public`));

//Líneas de los Routers
app.use('/', viewsRouter);
app.use('/api/products', productsRouter);
app.use('/api/cart', cartsRouter);

//Este es el server de Express
const server = app.listen(8080, () => console.log('Listening on PORT 8080'));
//Este es el server de Socket conectado con el server de Express
const io = new Server(server);

//On el es "escuchador" del evento y SIEMPRE el primero tiene que ser connection.
io.on('connection', socket => {
    console.log("Nuevo cliente conectado");
    socket.on('message', data => {
        io.emit('logs', data);
    });
});