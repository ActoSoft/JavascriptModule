// 1. Analizar que datos tengo
/**
 * Monto deseado (user) - 1
 * Tasa anual (user) - 2
 * Plazo en meses (user, (12-24-36)) - 3
 * Pago mensual (calculated) 
 * Comisión por apertura (constante)
 * Monto neto deposito (calculado)
 * Total Pagado (calculado)
 * CAT (constante)
 */

// 2. Declarar variables y constantes
const comision = 348
const cat = 15.71

// <input type="number" id="montoDeseado">
// <input type="number" id="tasaAnual">
/*
<select id="plazoMeses">
    <option value="12">12 meses</option>
    <option value="18">18 meses</option>
    <option value="24">24 meses</option>
</select>
*/

// const montoDeseadoRef = document.querySelector('#montoDeseado')
// const tasaAnualRef = document.querySelector('#tasaAnual')
// const plazoMesesRef = document.querySelector('#plazoMeses')

const montoDeseado = /*montoDeseadoRef.value*/ 10000
const tasaAnual = /*montoDeseadoRef.value*/ 8.9 /*porcentaje*/
const plazoMeses = /*plasosMesesRef.value*/ 12

const pagoMensual = (montoDeseado / plazoMeses) * (1 + (tasaAnual / 100))
const montoNetoDepositado = (montoDeseado * plazoMeses) - comision
const totalPagado = (montoDeseado + comision) * (1 + (tasaAnual / 100))

console.log('Monto deseado', montoDeseado)
console.log('Tasa anual', tasaAnual)
console.log('Plazo en meses', plazoMeses)
console.log('Pago Mensual:', pagoMensual)
console.log('Comision de apertura', comision)
console.log('Monto neto Depositado', montoNetoDepositado)
console.log('Total Pagado', totalPagado)
console.log('CAT', cat)