// Ciclo for (para)
// Permite ejecutar un bloque de código N cantidad de veces, siempre y cuando se cumpla
// una condición

// Secciones que componente al ciclo
// 1. Variable a iterar
// 2. Condición
// 3. Incremento

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('End')

// Ejercicio - Tablas de multiplicar
console.log('------------------------------')
const num = 8
const lower = 29
const upper = 30
for (let i = lower; i >= lower && i <= upper; i++) {
    console.log(`${num} x ${i} = ${num * i}`)
}

// For con incrementos diferentes a uno + contadores y acumuladores
// El conteo y la suma de todos los numeros pares del 100 al 200
console.log('------------------------------')
let counter = 0
let acc = 0
const lower2 = 0
const upper2 = 100

for (let i = lower2; i < upper2; i += 2) {
        counter += 1
        acc += i
}

console.log(`El conteo de los números pares entre ${lower2} y ${upper2} es: ${counter}`)
console.log(`La suma de los números pares entre ${lower2} y ${upper2} es: ${acc}`)

// For con decrementos
// Arbol de navidad
/*
*****
****
***
**
*
*/
console.log('------------------------------')
const levels = 10

for (let i = levels; i > 0; i -= 2) {
    console.log('*'.repeat(i))
}

// For anidados
// Dado un rango (0 a 10), mostrar la cantidad de divisores
// de cada uno de los digitos en ese rango y cuales son
// 0 -> 0 divisores ()
// 1 -> 1 divisor (1)
// 2 -> 2 divisores (1, 2)
// 8 -> 4 divisores (1, 2, 4, 8)
console.log('------------------------------')
const lower3 = 0
const upper3 = 50

// Este for es para recorrer los numeros que estan dentro del rango
for (let i = lower3; i <= upper3; i++) {
    let counter = 0 // cuenta cuantos divisores hay
    let digits = '' // Concatenando los divisores para mostrarlos
    for (let j = 0; j <= i; j++) {
        if (i % j === 0) {
            counter++
            digits += `${j},`
        }
    }
    console.log(`La cantidad de divisores para el numero ${i} es: ${counter} (${digits})`)
}


// ================================================
// Ciclo while (mientras)
// Depende de una condición
console.log('-----------------------------------------------')
let i = 0
while (/*condicion*/i < 10) {
    console.log(i)
    i++
}
console.log('End While')

// Ejercicio con while
// Obtener dos numeros aleatorio en el rango de 0 a 10
// que sumados sean mayor o igual a 10

// Math.random() [0, 1], un valor decimal
// Math.random() * max [0, max]
console.log('-----------------------------------------------')
const generateRandomNumber = () => Math.floor(Math.random() * 10/*max*/)

let num1 = 0
let num2 = 0

while ((num1 + num2) < 10) {
    console.log('ENTRO AL WHILE NORMAL')
    console.log(`La suma de ${num1} y ${num2} es: ${num1 + num2} y es menor a 10`)
    num1 = generateRandomNumber()
    num2 = generateRandomNumber()
}
console.log(`La suma de ${num1} y ${num2} es: ${num1 + num2} y es mayor o igual a 10`)

// Ciclo while vs ciclo for
// Ciclo for:
// -> Número FINITO de ejecuciones 
// -> Se conoce la longitud del rango o entidad a iterar
// -> Se conoce como debe ser el incremento o decremento
// -> Mayor complejidad (3 secciones diferentes)

// Ciclo while:
// -> Número INFINITO de ejecuciones 
// -> No se conoce la longitud del rango o entidad a iterar
// -> No conoce como debe ser el incremento o decremento
// -> Solo evalua la condición

// Do while
console.log('-----------------------------------------------')
let number1 = 6
let number2 = 7

do {
    let suma = number1 + number2
    console.log(`La suma de ${number1} y ${number2} es: ${suma} y es menor a 10`)
    number1 = generateRandomNumber()
    number2 = generateRandomNumber()
} while ((number1 + number2) < 10)
console.log(`La suma de ${number1} y ${number2} es: ${number1 + number2} y es mayor o igual a 10`)

// Calcula el año bisiesto
// El último año bisiesto fue el 2020
// Un año es bisiesto si el 4 es un divisor (no hay residuo en la división)
// Calcula en que año tendremos el 10vo año bisiesto partiendo de 2020

// Con for
console.log('-----------------------------------------------')
const initialAge = 2020
const numberOfAges = 10
let counterAge = 0
let ages = ''
let lastAge = initialAge

for (let age = initialAge + 1; counterAge !== numberOfAges; age++) {
    if (age % 4 === 0) {
        // Es un año bisiesto
        counterAge++
        ages += `${age},`
        lastAge = age
    }
}
console.log(`Los años bisiestos después del ${initialAge} son: ${ages}`)
console.log(`Después de ${numberOfAges} años bisiestos a partir del ${initialAge}, el año es: ${lastAge}`)

// Con While
console.log('-----------------------------------------------')
const initialAgeWhile = 2020
const numberOfAgesWhile = 10
let counterAgeWhile = 0
let agesWhile = ''
let ageWhile = initialAgeWhile

while (counterAgeWhile !== 10) {
    ageWhile += 1
    if (ageWhile % 4 === 0) {
        // Es un anio bisiesto
        counterAgeWhile++
        agesWhile += `${ageWhile},`
    }
}
console.log(`Los años bisiestos después del ${initialAgeWhile} son: ${agesWhile}`)
console.log(`Después de ${numberOfAgesWhile} años bisiestos a partir del ${initialAgeWhile}, el año es: ${ageWhile}`)