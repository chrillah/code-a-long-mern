import CarModel,{carType} from "./carSchema";


export const createCar = async (Car: carType) =>{
    const newCar = new CarModel(Car)
    await newCar.save()
    return newCar
}
export const getCars = async ()=>{
    const Cars = await CarModel.find()
    return Cars
}
