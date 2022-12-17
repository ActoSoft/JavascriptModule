// if (/*condicion*/) {
//     // si se cumple la condición has esto
// } else {
//     // si no se cumple la condicion
// }

// Operadores relacionales
// > : mayor que
// < : menor que
// >= : mayor o igual que
// <= : menor o igual que

console.log('Probando operador mayor que (true)', (5 > 2))
console.log('Probando operador mayor que (false)', (3 > 7))
console.log('Probando operador menor que (true)', (1 < 2))
console.log('Probando operador menor que (false)', (10 < 9))
console.log('Probando operador mayor o igual que (false)', (10 >= 15))
console.log('Probando operador mayor o igual que (true)', (10 >= 10))
console.log('Probando operador menor o igual que (false)', (10 <= 5))
console.log('Probando operador menor o igual que (true)', (5 <= 5))

// Operadores de igualdad
// == -> Igualdad
// === -> Igualdad exacta -> SIEMPRE
// != -> Diferente que
// !== -> Diferente que (exacta)
console.log()
console.log('Operador igualdad (no exacta)',(5 == '5'))
console.log('Operador igualdad (exacta)',(5 === '5'))

console.log('Operador diferente que (no exacto)', (3 != '3'))
console.log('Operador diferente que (exacto)', (3 !== '3'))

// Utilizando if - else (básico)
const age = 20
const hasINE = true

// Vamos a ver si la persona puede entrar a un bar
// La edad de la persona debe ser mayor o igual a 18 años
// Y la persona debe de tener INE
console.log()
console.log()

if (age >= 18 && hasINE) {
    console.log('Puedes entrar, eres mayor de edad')
} else {
    console.log('No puedes pasar, aun tas chavo')
}

// Operadores lógicos
// && -> AND -> TODAS las condiciones se deben de cumplir
// || -> OR -> AL MENOS UNA CONDICION se debe cumplir

console.log('Operador AND', ((5 === 5) && (1 <= 2) && (3 !== 2)))
console.log('Operador OR', ((5 === 5) || (1 <= 2) || (3 !== 4)))

// Varias condiciones
const calificacionFinal = 10
if (calificacionFinal < 6) {
    console.log('Reprobado')
} else if (calificacionFinal >= 6 && calificacionFinal < 7) {
    console.log('Va mal en la escuela')
} else if (calificacionFinal >= 7 && calificacionFinal < 8) {
    console.log('Alumno regular')
} else if (calificacionFinal >= 8 && calificacionFinal < 9) {
    console.log('Buen alumno')
} else if (calificacionFinal >= 9 && calificacionFinal < 10) {
    console.log('Sobresaliente')
} else {
    console.log('Excelente')
}

// Condiciones anidadas
// Una tienda tiene la siguiente oferta
// Si compras un producto que cuesta más de $2000, se te da un 20% de descuento
// Si el producto con el descuento inicial es mayor a $1750, se te da un 10% adicional

const precio = 1000
const descuentoInicial = 20
const descuentoAdicional = 10

if (precio > 2000) {
    const valorDescuentoInicial = precio * (descuentoInicial / 100)
    const precioDescuentoInicial = precio - valorDescuentoInicial
    if (precioDescuentoInicial > 1750) {
        const valorDescuentoAdicional = precioDescuentoInicial * (descuentoAdicional / 100)
        const precioDescuentoAdicional = precioDescuentoInicial - valorDescuentoAdicional
        console.log('Total a pagar (con descuento adicional):', precioDescuentoAdicional)
    } else {
        console.log('Total a pagar (con descuento inicial):', precioDescuentoInicial)
    }
} else {
    console.log('Total a pagar (sin descuento):', precio)
}

// Operador ternario
const name = 'Pedro'
const moduloCompletado = true
// Operador ternario -> (condicion) ? (se cumple la condicion) : (no se cumple la condicion)
const completoElModulo = (moduloCompletado) ? 'SI' : 'NO'
console.log(`El alumno ${name} ${completoElModulo} completó el módulo de Javascript`)

// Condiciones con valores truthy o falsy

const nulo = null
const indefinido = undefined
const stringVacio = 'fsdfsdfsdfsdfsd'
const numberCero = -4

if (!numberCero) {
    console.log('Es un valor falsy')
} else {
    console.log('Es un valor truthy')
}

// Switch
const mes = 15
switch (mes) {
    case 1:
        console.log('Enero')
        break
    case 2:
        console.log('Febrero')
        break
    case 3:
        console.log('Marzo')
        break
    case 4:
        console.log('Abril')
        break
    case 5:
        console.log('Mayo')
        break
    case 6:
        console.log('Junio')
        break
    case 7:
        console.log('Julio')
        break
    case 8:
        console.log('Agosto')
        break
    case 9:
        console.log('Septiembre')
        break
    case 10:
        console.log('Octubre')
        break
    case 11:
        console.log('Noviembre')
        break
    case 12:
        console.log('Diciembre')
        break
    default:
        console.log('No es un mes del año')
        break
}