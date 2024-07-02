import Users from "../models/UserModel.js";
import argon2 from "argon2";

//Funcion para Iniciar la sesion del usuasrio
export const Login = async(req, res) => {
    const user = await Users.findOne({
        where: {
            email: req.body.email
        }
    });
        if(!user) return res.status(404).json({msg: "Usuario no Encontrado"});
    const match = await argon2.verify(user.password, req.body.password)
        if (!match) return res.status(400).json({msg: "Contraseña incorrecta"});
            req.session.userId = user.uuid;

            const uuid = user.uuid;
            const name = user.name;
            const email = user.email;
            const role = user.role;

            res.status(200).json({uuid, name, email, role});
}

//Funcion para Obtener el inicio de sesion del usuario
export const Me = async(req, res) => {
    if(!req.session.userId){
        return res.status(401).json({msg: "Sesion Finalizada, Debe Acceder nuevamente"});
    }
    const user = await Users.findOne({
        attributes: ['uuid', 'name', 'email', 'role'],
        where: {
            uuid: req.session.userId
        }
    });
        if(!user) return res.status(404).json({msg: "Usuario no Encontrado"});
    res.status(200).json(user);    
}

//Funcion para cerrar la sesion de usuario
export const LogOut = async(req, res) => {
    req.session.destroy((err) =>{
        if(err) return res.status(400).json({msg: "No se logro cerrar la Sesion"});
       //res.clearCookie("sid");
        res.status(200).json({msg: "Sesion Cerrada"});
    });
    
}