import express from "express";
//importamos los metodos desde nuestros controladores para guardar dentro de ellos los metodos http
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";

const router = express.Router();

//Almacenamos los metodos http en nuestros metodos propios de nuestros controladores para usarlos dentro de la aplicación
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


export default router;