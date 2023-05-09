import {Schema, model} from 'mongoose'

export interface carType{
    model: string,
    brand : string
}

const schema = new Schema<carType>({
    model: {type: String, required:true},
    brand: {type: String, required:true}
})

const CarModel = model<carType>('Car', schema)

export default CarModel
