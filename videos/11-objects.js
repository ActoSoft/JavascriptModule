// Objetos
// Estructura de datos no lineal
// Cada elemento dentro del objeto cuenta con una clave (key) y un valor

// Sintaxis
const persona = {
    firstName: 'Martin',
    lastName: 'Melo Godinez',
    age: 25,
    isMale: true,
    addresses: [{ street: '', exteriorNumber: 1, zip: '12345' }],
    profile: {
        bio: '',
        interests: []
    },
    'hola-mundo': true
}

// Caracteristicas:
// Estructura de datos dinámica, puedo modificar su contenido
// Los valores de las entradas pueden ser de diferentes tipos
// El orden en cual se agregan las propiedades no influye en nada+

// ¿Cómo acceder a elementos dentro de un objeto?
// 1. Estática (cuando se conocen las keys dentro del objeto)

console.log('Apellidos', persona.lastName)
console.log('Nombre(s)', persona.firstName)

// 2. Dinámica (no conocemos el nombre de las keys)
const myKey = 'age'
console.log('Edad', persona[myKey]/* = persona.elValorDeMyKey = persona.age*/)
console.log('Es hombre?', persona['isMale'])
console.log('Test', persona['hola-mundo'])


// 3. Editar valores de keys existentes
console.log('before', persona)
persona.age = 50
persona['firstName'] = 'Pedro Pablo'
console.log('after', persona)

// 4. Agregar nuevas entradas al objeto
console.log('before', JSON.stringify(persona))
persona.phone = '5544332211'
persona['email'] = 'martinmelo@actosoft.com.mx'
console.log('after', JSON.stringify(persona))

// 5. Eliminar keys de un objeto
console.log('-------------------------------')
console.log('before', JSON.stringify(persona))
delete persona['hola-mundo']
delete persona.profile
console.log('after', JSON.stringify(persona))


// ------------------------------------------------------------
// Inmutabilidad en objetos
console.log('------------')
const obj1 = { key1: 'val1', key2: 'val2' }
const obj2 = obj1
const obj3 = { ...obj1 }
const obj4 = Object.assign({}, obj1)
obj1.key1 = 'edit1'
console.log('obj1', obj1)
console.log('obj2', obj2)
console.log('obj3', obj3)
console.log('obj4', obj4)

// Destructuring en objetos
// const firstName = persona.firstName
// const lastName = persona.lastName
// const isMale = persona.isMale

const { firstName, lastName, isMale } = persona
console.log(firstName, lastName, isMale)

// Shorthand para crear objetos
const street = 'sfdfsdf'
const exteriorNumber = 2

const address = {
    street,
    exteriorNumber 
}

console.log(address)

// Convertir objetos a arreglos
console.log(persona)

// 1. Convertir keys a arreglo
console.log(Object.keys(persona))

// 2. Convertir values a arreglo
console.log(Object.values(persona))

// 3. Convertir todo a arreglo
console.log(Object.entries(persona))
console.log(Object.entries(persona)[0])

// Validar si existe una key en un objeto
const validateObj = { key1: 'val1', key2: 'val2' }

// 1. If
console.log(validateObj.key3)
if (validateObj.key3) {
    console.log('existe')
} else {
    console.log('no existe')
}

// 2. hasOwnProperty
console.log(validateObj.hasOwnProperty('key3'))

// 3. in
console.log('key3' in validateObj)
