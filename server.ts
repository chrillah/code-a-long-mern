import express, {Request, Response, json} from 'express'
import carRouter from './routes/carRoutes'

import {connect} from 'mongoose'

connect('mongodb://localhost:27017/codealongmern')

const app = express()

const port = 8000

app.use(json())

app.get('/', (req:Request, res:Response)=>{
    res.send('Ja detta fungerar')
})


app.listen(port,()=>{
    console.log(`Port ${port} is on`)
})
