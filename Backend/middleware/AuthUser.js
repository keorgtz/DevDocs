import Users from "../models/UserModel.js";

// Funcion para verificar el usuario antes de que pueda acceder a las funciones de CRUD
export const verifyUser = async(req, res, next) => {
    if(!req.session.userId){
        return res.status(401).json({msg: "Usuario Desconectado, Debe iniciar sesion con su Cuenta"});
    }
    const user = await Users.findOne({
        where: {
            uuid: req.session.userId
        }
    });
        if(!user) return res.status(404).json({msg: "Usuario no Encontrado"});
      req.userId = user.id;
      req.role = user.role;
      next();
}

// Funcion para verificar si el usuario es administrador de lo contrario no lo deja usar las funciones CRUD
export const adminOnly = async(req, res, next) => {
    const user = await Users.findOne({
        where: {
            uuid: req.session.userId
        }
    });
        if(!user) return res.status(404).json({msg: "Usuario no Encontrado"});
            if (user.role !== "admin") return res.status(403).json({msg: "Accion Denegada, Ingrese como Administrador "});
        next();
}