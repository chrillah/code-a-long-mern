import express, {Request, Response, json} from 'express'
import carRouter from './routes/carRoutes'

import {getCars, createCar} from './db/models/carController'

import {connect} from 'mongoose'

connect('mongodb://localhost:27017/test')

const app = express()

const port = 8000

app.use(json())

app.use('/car', carRouter)

app.get('/car' , async(req:Request, res:Response)=>{
    const cars = await getCars()
    res.json(cars)
})

app.post('/car', async (req:Request, res:Response)=>{
    const newCar = req.body
    const createdCar = await createCar(newCar)
    res.json(createdCar)
})

app.get('/', (req:Request, res:Response)=>{
    res.send('Ja detta fungerar')
})


app.listen(port,()=>{
    console.log(`Port ${port} is on`)
})
