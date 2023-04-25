import { Router } from 'express';
import CartsManager from '../../managers/cartManager.js';

const router = Router();

const cart = [];

router.get('/:cid', async(req, res) => {
    res.send({ cart });
    //LISTA LOS PRODUCTOS QUE PERTENECEN AL CARRITO
    const { cid } = req.params;
    
});

router.post('/', async(req, res) => {
    //DEBERÁ CREAR UN NUEVO CARRITO CON LA SIGUIENTE ESTRUCTURA:
    // ID NUMBER (QUE NO SE DUPLIQUEN); PRODUCTS(ARRAY QUE TENGA LOS OBJETOS DE CADA PRODUCTO)
    const newCart = { products: [] }
});


export default router;

