

import mysql from 'mysql2'
import dotenv from 'dotenv'
import express from 'express'
import {getNotes, getNote, createNote} from './database.js'
dotenv.config()



//express app
const app = express()



app.use((req, res, next) => {

    console.log(req.path, req.method)
    next()

})

//routes
app.get('/', (req, res) => {

   

    res.send(`${process.env.MYSQL_HOST}`)

})
app.get('/notes/:id', async(req,res)=>{
    const id = req.params.id
    const result = await getNote(id)
    res.send(result)
})
app.get('/notes', async(req, res)=>{
    const notes = await getNotes()
    res.send(notes)
})

app.get('/:name', (req, res) =>{
    res.send(`Welcome ${req.params.name}`);
})

//listen for request
app.listen(process.env.PORT, () => { 
    console.log('listening on port 4000!!')
})