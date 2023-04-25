import express from "express";

import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import __dirname from './utils.js';


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use('/api/products', productsRouter);
app.use('/api/cart', cartsRouter);



app.listen(8080, () => console.log('Listening on PORT 8080'));