// indexOf -> retorna la posición del elemento buscado
// Si existen múltiples elementos con el mismo valor, retornará la primera
// NOTA: Si el elemento buscado no existe en el arreglo, retorna un -1

const arrIndexOf = ['Nancy', 'Pedro', 'Juan', 'Ernesto', 'Nikki', 'Ernesto']
const indexElementFound = arrIndexOf.indexOf('Ernesto', 4)
// console.log('indexElementFound', indexElementFound)


// reverse -> Invierte un arreglo en su totalidad
// El primer elemento pasa hacer el último y viceversa

const numbers = [1, 2, 3, 4, 5]
numbers.reverse()
// console.log(numbers)



// slice - corta el arreglo en partes
// Puedes definir la posición inicial o final de este subarreglo

const dogNames = ['Jack', 'Perry', 'Polo', 'Spanky', 'Lobo', 'Scobby']
const myDogNames = dogNames.slice(0, -3)
// console.log('myDogNames', myDogNames)


// includes -> Valida si un elemento existe dentro de un arreglo
// Retorna un booleano

const foodOptions = ['Hamburguesa', 'Pizza', 'Taco', 'KFC']
const result = foodOptions.includes('Hot Dog')
// console.log('result', result)

const country = 'AR'

// if (country === 'MX' || country === 'US' || country === 'CA')
//     console.log('Norte América')
// else
//     console.log('Sudamérica')

const northAmericaCountries = ['MX', 'US', 'CA']
// if (northAmericaCountries.includes(country))
//     // console.log('Norte América')
// else
//     console.log('Sudamérica')


// Método find -> Encuentra un elemento a partir de una condición
// Y lo retorna
// NOTA: Este método retorna UN SÓLO ELEMENTO
// Si hay varios que cumplan la condición retorna el primero que encuentre

const notes = [10, 7, 5, 2, 9]
const minNote = 1
const noteFound = notes.find(note => note < minNote)
// console.log('noteFound', noteFound)


// Demostración - creando mi propio método find
Array.prototype.myFind = function (callback) {
    if (this.length > 0) {
        for (let i = 0; i < this.length; i++) {
            const result = callback(this[i])
            if (result) return this[i]
        }
    }
    return undefined
}

const customNoteFound = notes.myFind((note) => {
    return note < minNote
})
// console.log('customNoteFound', customNoteFound)


// forEach -> Itera los elementos del arreglo sin usar un bucle
// NOTA: No retorna nada, simplemente los itera

const happyNumbers = [2, 5, 9, 10, -2]
happyNumbers.forEach((value, index) => {
    const double = value * 2
    // console.log(`El doble del valor del elemento en el índice ${index} es: ${double}`)
    return double
})


// map -> MUY similar al forEach (hace exactamente lo mismo)
// La gran diferencia es que este SÍ retorna algo
// Retorna un nuevo arreglo con la misma cantidad de elementos
// Y con los valores modificados a diferencia de los originales

const results = happyNumbers.map((value) => value ** 2)
// console.log('results', results)


// filter -> Encuentra todos los elementos que cumplan una condición
// Retorna los elementos encontrados en un nuevo arreglo

const filaParaEntrarAlBar = [25, 30, 17, 12, 45, 2, 70]
const mayoresDeEdad = filaParaEntrarAlBar.filter((age) => (age >= 18))
// console.log('mayoresDeEdad', mayoresDeEdad)


// método some - Busca que AL MENOS un elemento cumpla con una condición
// Retorna true si al menos un elemento cumple con la condición
// Retorna false si NINGUNO de los elementos cumple con la condición

const temperaturasDeNinos = [36, 35, 35.5, 37, 37.5, 37.9]
const feverTemperature = 38
// fiebre a partir de 38 grados (>= 38)

const existsChildWithFever =
    temperaturasDeNinos.some((value) => value >= feverTemperature)
console.log('existsChildWithFever', existsChildWithFever)


// método every -> Caso contrario a some, igual utiliza una confición
// Sí y sólo si TODOS los elementos cumplen con la condición, retorna true
// Si al menos uno no cumple la condición, retorna false

const filaParaJuegoMecanico = [180, 165, 170, 161] // cm

// La regla para subirse al juego es que todos los integrantes de la fila
// tenga una estatura mayor o igual a 160cm

const seLogro = filaParaJuegoMecanico.every((cms) => cms >= 160)
console.log('seLogro', seLogro)


// método reduce -> Navaja suiza de Javascript
// Permite iterar y al mismo tiempo acumular los valores del arreglos
// Puede retornar un arreglo, un objeto, un string o un número

// Sumar todos los elementos del arreglos
const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numeritos.reduce((acc, currentNumber) => (acc += currentNumber), 0)
console.log('sum', sum)

// Retornar el mismo arreglo pero con el prefijo 'Actosoft'
const words = ['Hello', 'World', 'Community', 'Loves']
const resultWords = words.reduce((acc, word) => [...acc, `Actosoft ${word}`], [])
console.log('words', resultWords)

// Contar palabras repetidas en un string
const frase = 'Actosoft Academy es la mejor Academy del world en el world en si'

const fraseArray = frase.split(' ')
const wordsCount = fraseArray.reduce((acc, value) => {
    if (acc[value]) {
        acc[value] += 1
    } else {
        acc[value] = 1
    }
    return acc
}, {})

console.log('wordsCount', JSON.stringify(wordsCount))




