// Callbacks -> Call back (llamar después)

// Son funciones que son pasadas a otra función como argumento
// La función que recibe decide cuando "llamar de nuevo" al callback
// La función que recibe se le conoce como High-Order function
// Normalmente los callbacks son ejecutados dependiendo de un evento o resultado

// Javascript
// Lenguaje interpretado
// Lenguaje debilmente tipado
// Lenguaje single thread
// Lenguaje asíncrono (a veces)

// Ejemplo de callbacks

// High-Order function
const getNumber = (callback/*funcion*/) => {
    const number = Math.floor(Math.random() * 100)
    return callback(number)
}

const isEvenOrOdd = (number) => {
    if (number % 2 === 0) return `El número ${number} es par`
    return `El número ${number} es impar`
}

const isPositiveOrNegative = (number) => {
    if (number >= 0) return `El número ${number} es positivo`
    return `El número ${number} es negativo`
}
// TODO: START UNCOMMENT
// console.log(getNumber(isEvenOrOdd))
// console.log(getNumber(isPositiveOrNegative))
// TODO: END UNCOMMENT



// setTimeout -> Ejecuta un bloque de código después de un cierto tiempo
// TODO: START UNCOMMENT
// console.log('Antes del setTimeout') // Función síncrona
// setTimeout(printHelloWorld/*funcion - callback*/, 10000) // Función asíncrona
// console.log('Después del setTimeout') // Función síncrona
// TODO: END UNCOMMENT

// [console.log('Antes'), setTimeout, console.log('Despues')]
// [setTimeout, console.log('Despues')]
// setTimeout se ejecuta -> El callback se ejecutará EN FUTURO
// [console.log('Despues'), async printHelloWorld()]
// [async printHelloWorld()] ... Después de 10 segundos
// []

function printHelloWorld () {
    console.log('Hola Mundo con retraso de 10 segundos');
}


// setInterval -> Ejecuta un bloque de código cada cierto tiempo
// Y sí, también es una función asíncrona!

// function printILoveYou(name = 'Bandida') {
//     console.log(`I love you ${name}`)
// }

// console.log('Antes del setInterval')
// const myInterval = setInterval(printILoveYou, 1000, 'CR7')
// console.log('Después del setInterval')

// setTimeout(() => clearInterval(myInterval), 5100)


// Funciones anónimas - callbacks anónimos
// Son funciones que se crean en el espacio definido para pasar un callback como argumento
// Se les conoce como anónimas ya que no tienen un nombre como tal
// Simplemente se declaran con el keyword function o como arrow function

// function sayMyName(name) {
//     console.log(`Hola! Mi nombre es ${name}`)
// }

setTimeout((name) => console.log(`Hola! Mi nombre es ${name}`), 1000, 'Pablo')



