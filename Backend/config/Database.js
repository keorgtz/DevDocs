import { Sequelize } from "sequelize";

//conectamos a la base de datos MySQL con el Nombre: 'aether_db', Usuario: 'root', Contraseña: '', Host: 'localhost'
const db = new Sequelize('aether_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
