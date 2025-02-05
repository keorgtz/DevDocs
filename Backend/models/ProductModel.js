import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

//Funcion para Desestructurar los datos de la tabla 'users'
const {DataTypes} = Sequelize;

// Creacion de la tabla 'Products'
const Products = db.define('products', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }

}, {
    freezeTableName: true
});
// Relacion de Productos con usuarios segun el id del usuario
Users.hasMany(Products);
Products.belongsTo(Users, {foreignKey: 'userId'});

export default Products;