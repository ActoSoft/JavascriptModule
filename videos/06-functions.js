// ¿Qué es una función?

// Es un bloque de código el cuál permite recibir datos
// (parámetros o argumentos), hacer procesamiento específico
// y retornar valores que contengan el resultado

// ¿Cuál es la ventaja de utilizar funciones?
// - Reutilización de código
// - Reducción de código
// - Separación de lógica

// ¿Cómo se declaran funciones?
// 1. Tradicional - funciones de declaración
function sumarNumeros(/*parametros*/) {
    // procesamiento

    // opcional
    return 0
} 

// 2. Función flecha (arrow function) - funciones de expresión - ES6
const restarNumeros = (/*parametros*/) => {
    // procesamiento

    // opcional
    return 0
}


const saludo = () => {
    console.log('Hola! Soy una función')
}

// ¿Cómo ejecuto o mando llamar una función?
saludo()


// Llamar funciones que reciben parámetros
const multiplicarNumeros = (num1, num2 = 3/*parametros*/) => {
    console.log('Voy a multiplicar dos números')
    console.log(num1, num2)
    const resultado = num1 * num2
    return resultado
}

const result = multiplicarNumeros(5, 5)
console.log(`El resultado de multiplicar 5 es ${result}`)


// Ejercicio ---------------------
// 1. Calcular el área Y el vólumen de un cubo
// A(cuadrado) = l * l = l ** 2
// V(cubo) = l * l * l = l ** 3

const calcularAreaCuadrado = (lado) => {
    const area = lado ** 2
    return area
}

const lado = 7
const area = calcularAreaCuadrado(lado)
console.log(`El área de un cuadrado de lado ${lado} es: ${area}`)


// Ejercicio #2 ---------- Calcular promedio (3 calificaciones)
const sumarCalificaciones = (cal1, cal2, cal3) => {
    const resultadoSuma = cal1 + cal2 + cal3
    return resultadoSuma
}

const dividirCalificaciones = (suma, noCalificaciones) => {
    const promedio = suma / noCalificaciones
    return promedio
}

const cal1 = 10
const cal2 = 5
const cal3 = 8
const resultado = dividirCalificaciones(sumarCalificaciones(cal1, cal2, cal3), 3)
console.log(`El promedio es: ${resultado}`)
