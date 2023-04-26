import {Router} from 'express';


const router = Router();

router.get('/', (req, res) => {
    const user = {
        name:"Julia",
        email:"correoagus@correo.com"
    }
    res.render('home', {name:user.name, css:'home'})
});

router.get('/products', (req, res) => {
    const food = [
        {name:"Hamburguesa", price:100},
        {name:"Papa con queso", price:2000000},
        {name:"Pancho",price:30},
    ]
    res.render('products', { food });
});

// router.get('/:uid', (req, res) => {
//     //aca va el find y se renderiza.
//     res.render('home', { name: user.name });
// });


export default router;