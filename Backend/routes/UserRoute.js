import express from "express";
//importamos los metodos desde nuestros controladores para guardar dentro de ellos los metodos http
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Users.js";

const router = express.Router();

//Almacenamos los metodos http en nuestros metodos propios de nuestros controladores para usarlos dentro de la aplicación
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);


export default router;