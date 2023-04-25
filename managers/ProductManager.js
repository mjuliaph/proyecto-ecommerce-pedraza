import fs from 'fs';

export default class ProductManager{
    constructor() {
        this.path = './files/products.json';
        this.products = [];
    }

    getProducts = async () => {
        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const products = JSON.parse(data);
            // console.log("getproducts", data);
            return products;
        }
        return [];
    }
    
    async addProduct({ title, description, price, thumbnail, code, stock }) {
        try {
            const products = await this.getProducts();
            if (!title || !description || !price || !thumbnail || !code || !stock) {
                console.log("Datos incompletos, no se cargó el producto");
                return null; 
            }
            const product = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            if (this.products.length === 0) {
                product.id = 1;
            }
            else {
                const lastProduct = this.products[this.products.length - 1];
                product.id = lastProduct.id++;
            }
            this.products.push(product);
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
            return product;
            
        } catch (error) {
            console.log(error);
        }
    }
    
    getProductById = async (productId) => {
        try {
            const products = await this.getProducts();
            const productIndex = this.products.findIndex(product => product.id === productId);
            if (productIndex === -1) {
                console.log("El producto no existe");
                return null;
            }
            return productIndex;
        } catch (error) {
            console.log(error);
        }
    }

    updateProduct = async (id, updatedField) => {
        try {
            const products = await this.getProducts();
            const index = products.findIndex(product => product.id === id);
            if (index === -1) {
                console.log("El producto no existe");
                return null;
            }
            const productToUpdate = { ...products[index], ...updatedField };
            products[index] = productToUpdate;
            await fs.writeFile(this.path, JSON.stringify(products, null, 2));
            return productToUpdate;

        } catch (error) {
            console.log(error);           
        }
    }

    deleteProduct = async(id)=> {
        try {
          const products = await this.getProducts();
          const index = products.findIndex((prod) => prod.id === id);
          if (index === -1) {
              console.log("producto no encontrado");
              return null;
          }
          products.splice(index, 1);
          await fs.writeFile(this.path, JSON.stringify(products, null, 2));
        } catch (error) {
          console.error(error);
        }
      }

}

const products = [
    {
        "title": "El gran Gatsby",
        "description": "Un retrato de la decadencia de la alta sociedad americana durante la era del jazz en los años 20.",
        "price": 12.99,
        "thumbnail": "https://example.com/images/gatsby.jpg",
        "code": "GTB001",
        "stock": 25
    },
    {
        "title": "El padrino",
        "description": "Un poderoso jefe de la mafia intenta transmitir su imperio a su hijo menor.",
        "price": 14.99,
        "thumbnail": "https://example.com/images/godfather.jpg",
        "code": "PDF001",
        "stock": 18
    },
    {
        "title": "El señor de los anillos: La comunidad del anillo",
        "description": "Un hobbit llamado Frodo se embarca en una aventura para destruir un anillo mágico que podría sumir a la Tierra Media en la oscuridad.",
        "price": 19.99,
        "thumbnail": "https://example.com/images/lotr1.jpg",
        "code": "LRN001",
        "stock": 12
    },
    {
        "title": "Harry Potter y la piedra filosofal",
        "description": "Un niño llamado Harry Potter descubre que es un mago y se matricula en la escuela de magia y hechicería de Hogwarts.",
        "price": 10.99,
        "thumbnail": "https://example.com/images/harry1.jpg",
        "code": "HPF001",
        "stock": 30
    },
    {
        "title": "La chica del tren",
        "description": "Una mujer que viaja en el tren a diario se obsesiona con una pareja que ve desde la ventana.",
        "price": 9.99,
        "thumbnail": "https://example.com/images/girltrain.jpg",
        "code": "LCT001",
        "stock": 8
    },
    {
        "title": "La naranja mecánica",
        "description": "Un joven criminal llamado Alex es sometido a un tratamiento experimental para reducir su agresividad.",
        "price": 11.99,
        "thumbnail": "https://example.com/images/clockwork.jpg",
        "code": "ORG001",
        "stock": 15
    },
    {
        "title": "El código Da Vinci",
        "description": "Un profesor de simbología investiga un asesinato en el Louvre y descubre una conspiración para encubrir la verdadera identidad de Jesús.",
        "price": 13.99,
        "thumbnail": "https://example.com/images/davinci.jpg",
        "code": "DCV001",
        "stock": 20
    },
    {
        "title": "Cincuenta sombras de Grey",
        "description": "Una joven se involucra en una relación BDSM con un hombre rico y poderoso.",
        "price": 8.99,
        "thumbnail": "https://example.com/images/50shades.jpg",
        "code": "FSH001",
        "stock": 10
    },
    {
        "title": "El club de la pelea",
        "description": "Un hombre insomne y desilusionado con su vida mediocre y sin sentido, forma un club clandestino de pelea que se convierte en un movimiento subversivo.",
        "price": 12.99,
        "thumbnail": "https://example.com/images/fightclub.jpg",
        "code": "CLB001",
        "stock": 7
    },
    {
        "title": "El rey león",
        "description": "Un joven león llamado Simba debe enfrentar su destino como rey de la selva después de la muerte de su padre.",
        "price": 7.99,
        "thumbnail": "https://example.com/images/lionking.jpg",
        "code": "RLL001",
        "stock": 22
    }
];


const context = async () => {
    try {
        const listProducts = await fs.promises.writeFile('./files/products.json', JSON.stringify(products, null, '\t'));
        // const productsParse = JSON.parse(listProducts);
        const content = await fs.promises.readFile('./files/products.json', 'utf-8');
        console.log(content);    
        // await fs.promises.appendFile('./files/products.json', "Nuevo texto");
        // const newContent = await fs.promises.readFile('./files/products.json', 'utf-8');
        // console.log(newContent);
    } catch (error) {
        console.log(error);
    }
}

context();