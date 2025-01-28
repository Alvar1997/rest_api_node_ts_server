import express from "express";

const server = express()

//Routing
server.get('/', (req, res) => {
    res.json('DESDE GET')
})

server.post('/', (req, res) => {
    res.json('DESDE POST')
})

server.put('/', (req, res) => {
    res.json('DESDE PUT')
})

server.patch('/', (req, res) => {
    res.json('DESDE PATCH')
})

server.delete('/', (req, res) => {
    res.json('DESDE DELETE')
})

export default server