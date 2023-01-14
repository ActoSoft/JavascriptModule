// Arrays

// Estructura de datos ORDENADA.
// Agrupar un grupo de datos de manera secuencial.

// Sintaxis
const myArray = [1, 2, 3]

// Son estructuras dinámicas, el tamaño de un arreglo puede cambiar
// durante la ejecución de un proceso.

// Los elementos dentro del arreglo pueden ser de diferentes tipos.
const manyTypes = [2, 'hola', true, null, undefined, [], () => {}]

// El primer elemento tiene un índice 0.

// Posicion vs indice

// Posicion = No. Elemento

// Posicion          1       2      3     4     5      
// const array = [   'a',   'b',   'c',  'd',  'e'] -> Tiene 5 elementos
// Indice            0       1      2     3     4

// indice = (posicion - 1)


// ------------------------------------------
// Acceder a elementos
const array = ['a', 'b', 'c', 'd', 'e']
console.log(array)

// array[index]
console.log('Primer elemento', array[0])
console.log('Tercer elemento', array[2])
console.log('Ultimo elemento', array[4])

// ------------------------------------------
// Propiedad length
const bigArray = ['a', 'b', 'c', 'd', '123', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd', 'aeiou']
console.log('Longitud del arreglo bigArray', bigArray.length)
console.log('Ultimo elemento del big Array', bigArray[bigArray.length - 1])

// ------------------------------------------
console.log('-------------------------------')
// Actualizar valor dentro del arreglo
// Actualiza el 5to elemento y ponle un "Hola Mundo"
console.log('before', bigArray[4])
bigArray[4] = 'Hola Mundo!'
console.log('after', bigArray[4])


// Agregar elementos al arreglo
const myArrayAdd = [4, 6, 9, 6]

// 1. Al final (metodo push)
console.log('before', myArrayAdd)
myArrayAdd.push(0)
console.log('after', myArrayAdd)

// 2. Al inicio (metodo unshift)
console.log('before', myArrayAdd)
myArrayAdd.unshift(1)
console.log('after', myArrayAdd)

// 3. En una posicion i (metodo splice)
console.log('before', myArrayAdd)
myArrayAdd.splice(2, 0, 1000)
console.log('after', myArrayAdd)

console.log('before', myArrayAdd)
myArrayAdd.splice(4, 0, -1000)
console.log('after', myArrayAdd)




// Eliminar elementos del arreglo
console.log('---------------------------------')
const myArrayDelete = ['Pedro', 'Juan', 'Marco', 'Diego', 'Tomas', 'Carlos']

// Al final (metodo pop) -> Stacks
console.log('before pop', myArrayDelete)
myArrayDelete.pop()
console.log('after pop', myArrayDelete)

// Al principio (metodo shift) -> Queue
console.log('before shift', myArrayDelete)
myArrayDelete.shift()
console.log('after shift', myArrayDelete)

// En medio (método splice)
console.log('before splice', myArrayDelete)
myArrayDelete.splice(1, 4)
console.log('after splice', myArrayDelete)

// Mutabilidad vs inmutabilidad
console.log('----------------------')
const array1 = ['Pedro', 'Juan', 'Marco', 'Diego', 'Tomas', 'Carlos']
const array2 = array1 // Mutabilidad
array1[0] = 'Julian'
console.log('array1', array1)
console.log('Son iguales?', array1 === array2)
console.log('array2', array2)

// array1 -> [0x1, 0x2, 0x3, 0x4, 0x5]
// array2 -> [0x1, 0x2, 0x3, 0x4, 0x5]
// COPIASTE LAS DIRECCIONES DE MEMORIA, NO LOS VALORES
// El arreglo está siento mutable, ya que modifica en un lado y se ve reflejado en todos

// ¿Cómo lo hago inmutable?
// Spread operator (ES6)
const immutableArray = [...array1]
console.log('immutableArray', immutableArray)
array1[1] = 'Cristian'
console.log('after change array1', array1)
console.log('after change array2', array2)
console.log('after change immutableArray', immutableArray)

// Agregar elementos con inmutabilidad
const restaurants = ['KFC', 'MCDonals', 'Milagro']

// Al principio (unshift)
const newRestaurantStart = 'Pollito feliz'
const startRestaurantResult = [newRestaurantStart, ...restaurants]
console.log('startRestaurantResult', startRestaurantResult)

// Al final (push)
const newRestaurantEnd = 'La Chona'
const endRestaurantResult = [...restaurants, newRestaurantEnd]
console.log('endRestaurantResult', endRestaurantResult)

// Destructuring en arrays (ES6)
console.log('-----------------------')
const destructuringArray = ['Martin', 'Melo Godinez', 25]
// const name = destructuringArray[0]
// const lastName = destructuringArray[1]
// const age = destructuringArray[2]
const [name, lastName, age] = destructuringArray
console.log({ name, lastName, age })


// Método split (convertir strings a arrays)
const calificaciones = '5,7,8,9,4,7,6,8,9'
const calificacionesArray = calificaciones.split(',')
console.log(calificacionesArray)

const calificacionesArrayNumber = []
for (let i = 0; i < calificacionesArray.length; i++) {
    calificacionesArrayNumber.push(Number(calificacionesArray[i]))
}

console.log(calificacionesArrayNumber)


// Metodo join (contrario a split)
const joinArray = [1, 2, 3, 4, 5]
console.log(joinArray.join('}}}}'))

// Cómo validar si una variable contiene un array?
const fakeArray = [1, 2, 3, 4, 5]
if (Array.isArray(fakeArray)) {
    console.log('Es un arreglo')
    fakeArray.push(23)
} else {
    console.log('NO es un arreglo')
    fakeArray += '23'
}
console.log('fakeArray', fakeArray)

// for of
const numbersArray = [1, 2, 3, 4, 5]
for (const numberArray of numbersArray) {
    console.log('numberArray', numberArray)
}

// for in
const numbersArray2 = [1, 2, 3, 4, 5]
for (const numberArray in numbersArray2) {
    console.log('numberArray2', numberArray)
}