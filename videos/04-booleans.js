const verdadero = true
const falso = false

// falsy
const falsyNumber = 0
const falsyString = ''

console.log('El valor 0 es falsy?', falsyNumber == false)
console.log('El valor "" es falsy?', falsyString == false)

// truthy
const truthyNumber = 2
const truthyString = 'Hello World'

console.log(`El valor ${truthyNumber} es falsy?`, truthyNumber == false)
console.log(`El valor ${truthyString} es falsy?`, truthyString == false)


