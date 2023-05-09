import express, {Request, Response, json} from 'express'

const app = express()

const port = 8000

app.use(json())

app.get('/', (req:Request, res:Response)=>{
    res.send('Ja detta fungerar')
})


app.listen(port,()=>{
    console.log(`Port nummer: ${port} är igång`)
})
