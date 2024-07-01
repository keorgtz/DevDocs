import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

//#region Importacion de base de datos
import db from "./config/Database.js";
//#endregion

dotenv.config();

const app = express();

//#region REGION_NAME
    const sessionStore = SequelizeStore(session.Store);
    
    const store = new sessionStore({
        db: db
    });
//#endregion

//#region CREATE TABLES FUNCTION
//Esta Funcion es una funcion autoejecutable que crear las tablas automaticamente sincronizando la base de datos
//una vez terminado de crear y sincronizar la base de datos, por medio de una promesa, la funcion para automaticamente
//
// (async() => {
//     await db.sync();
// })();
//
//#endregion

//#region SESSION Y AUTENTIFICACION DE TOKENS
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
       secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

//#endregion

//#region MIDDLEWARES
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);
//#endregion

//#region CREATE SESSION TABLE FUNTION
// store.sync();
//#endregion

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running on http://localhost:" + process.env.APP_PORT);
});