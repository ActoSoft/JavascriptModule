import { saludar, adios } from './modulo.js'
import dotenv from 'dotenv'

console.log(saludar())
console.log('Adiosssss', adios())

dotenv.config()

// Como leo una variable de entorno?
console.log(process.env.EDAD)
console.log(process.env.PASSWORD)