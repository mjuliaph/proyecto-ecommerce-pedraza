import multer from 'multer';
import __dirname from '../utils.js';

// Donde se va a almacenar todo.
/*Se debe importar el archivo en donde se va a utilizar y después usar por ejemplo así:
router.post('/', uploader.single(acá el name idéntico al que va en el formulario, en el ejemplo es "image"), (req,res)=>{
const pet = req.body;
pets.push(pet);
res.send({status:"success", message:"Pet added"})
})
En el formulario poner: 
<form action="/api/pets" method="POST" enctype="multipart/form-data">
<input type="file" name="image">
*/

const storage = multer.diskStorage({
    // carpeta
    destination: function (req, file, cb) {
        cb(null,`${__dirname}/public/assets`)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const uploader = multer({ storage });

export default uploader;