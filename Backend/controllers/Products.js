import Products from '../models/ProductModel.js';
import Users from "../models/UserModel.js";


export const getProducts = async (req, res) => {
    try {
        let response;
        //Funcion para Verificar si el usuario es administrador, de ser asi, podra ver todos los productos existentes
        if(req.role === 'admin') {
            response = await Products.findAll({
                include: [{
                    model: Users
                }]
            });
        }else{
            //si no es Admin, entonces obtendra unicamente los productos creados por la cuenta o usuario que se este usando
            response = await Products.findAll({
                where:{
                    userId: req.userId
                },
                include: [{
                    model: Users
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductById = (req, res) => {
    
}

export const createProduct = (req, res) => {
    
}

export const updateProduct = (req, res) => {
    
}

export const deleteProduct = (req, res) => {
    
}