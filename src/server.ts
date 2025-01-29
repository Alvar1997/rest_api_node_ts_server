import express from "express";
import colors from "colors"
import router from "./router";
import db from "./config/db";

//Conectar a base de datos 
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.green.bold('Coneción exitosa a la BD'))
    } catch (error) {
        console.log(colors.red.bold('Hubo un error al conectar a la BD.'))
    }

}
connectDB()


const server = express()

server.use('/api/products', router)

export default server