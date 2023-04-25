import { Router } from 'express';
import ProductManager from '../../managers/ProductManager.js';

const router = Router();

// const products = [];

router.get('/', async (req, res) => {
    const data = await getProducts();
    console.log(data);
    res.send({ products });
    //DEBE TRAER TODOS LOS PRODUCTOS DE LA BASE, INCLUYENDO EL LÍMITE 
});

router.get('/:pid', (req, res) => {
    //DEBE TRAER UNICAMENTE EL PRODUCTO QUE SELECCIONE
})

// router.post('/', (req, res) => {
//     const product = req.body;
//     products.push(product);
//     // res.status(200).send("Producto agregado!")
//     res.send({ status: "success", message: "Producto agregado" });
// });

router.post('/', async (req, res) => {
    //DEBE AGREGAR UN PRODUCTO CON TODOS LOS CAMPOS
    const product = req.body;
    products.push(product);
    await ProductManager.addProduct(product);
    res.send({ status: "success", message: "Producto agregado" });
});

router.put('/', (req, res) => {
    //DEBE TOMAR EL PRODUCTO CON LOS CAMPOS ENVIADOS DESDE EL BODY; NUNCA DEBE ACTUALIZAR O ELIMINAR EL ID.
});

router.delete('/', (req, res) => {
    //BORRA EL PRODUCTO CON EL ID QUE INDIQUE.
});





export default router;