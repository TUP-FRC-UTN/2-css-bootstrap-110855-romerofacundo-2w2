const array = [hola,3.14, true]
console.log('el array es: ' + array)

const array2 = new array(3)
console.log(array2)

const numeros = [1, 35,6,54,13,3,24]
console.log('el array de numers: ' + numeros)
console.log('primer elemento: ' + numeros[0])
console.log('indice de error: ' + numeros[123])

numeros.push(65)
console.log("array actualizado: " + numeros)
numeros.unshift(33)
console.log("de vuelta muestro todo: " + numeros)

console.log("la cantidad de elementos es: " + numeros.length)