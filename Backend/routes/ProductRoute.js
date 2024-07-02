import express from "express";
//importamos los metodos desde nuestros controladores para guardar dentro de ellos los metodos http
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

//Almacenamos los metodos http en nuestros metodos propios de nuestros controladores para usarlos dentro de la aplicación
router.get('/products', verifyUser, getProducts);
router.get('/products/:id', verifyUser, getProductById);
router.post('/products', verifyUser, createProduct);
router.patch('/products/:id', verifyUser, updateProduct);
router.delete('/products/:id', verifyUser, deleteProduct);


export default router;

//verifyUser hace que solo los usuarios con sesion iniciada puedan acceder al CRUD si no no podran ver nada ni modificar nada
//