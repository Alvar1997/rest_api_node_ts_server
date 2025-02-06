import express, { request } from "express";
import colors from "colors"
import router from "./router";
import db from "./config/db";

//Conectar a base de datos 
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        //console.log(colors.green.bold('Coneción exitosa a la BD'))
    } catch (error) {
        console.log(colors.red.bold('Hubo un error al conectar a la BD.'))
    }

}
connectDB()

//Instancia de express
const server = express()

//Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)

server.get('/api', (req, res) => {
    res.json({ msj: 'Desde API' })
})

export default server