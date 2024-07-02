import express from "express";
//importamos los metodos desde nuestros controladores para guardar dentro de ellos los metodos http
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Users.js";
//verifyUser verifica si el usuario inicio sesion y adminOnly Verifica si el usuario es admin, de lo contrario no lo deja usar las Funciones CRUD
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

//Almacenamos los metodos http en nuestros metodos propios de nuestros controladores para usarlos dentro de la aplicación
router.get('/users', verifyUser, adminOnly, getUsers);
router.get('/users/:id', verifyUser, adminOnly, getUserById);
router.post('/users', verifyUser, adminOnly, createUser);
router.patch('/users/:id', verifyUser, adminOnly, updateUser);
router.delete('/users/:id', verifyUser, adminOnly, deleteUser);


export default router;