import express,{Request, Response} from 'express'
import { createCar } from '../db/models/carController'

const router = express.Router()

router.get('/', (req:Request, res:Response)=>{
    res.send('Get cars')
})

router.post('/car', async (req:Request, res:Response)=>{
    const createdCar = await createCar(req.body)
    res.status(201).json(createdCar)
})

export default router
