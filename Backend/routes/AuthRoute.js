import express from "express";
import {Login, LogOut, Me} from "../controllers/Auth.js";

const router = express.Router();

//Almacenamos los metodos http en nuestros metodos propios de nuestros controladores para usarlos dentro de la aplicación
//Cada metodo corresponde Me = Mi Info de usuario, Login = login de la app y Logout = logout de la app 
router.get('/me', Me);
router.post('/login', Login);
router.delete('/logout', LogOut);


export default router;