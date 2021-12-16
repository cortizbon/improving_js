//TYPES

//primitive types: numbers, strings, booleans, null, undefined, symbol

//object types: everything that is not a primitive type is an object


//NUMBERS
// integer literals

4
5
1978089

//hexadecimales, octales, binarios

//floating-point literals

45.4
67.642345

//Arithmetic in JavaScript

4 + 5// suma
5 - 2 //resta
5 * 2 //multiplicación
5 / 2 //división
5 % 2 //módulo
5 ** 2 //potenciación

//objeto Math
Math.pow(2,3) //potenciación
Math.round() // redondear al entero más cercano
Math.ceil() // redondear hacia arriba
Math.floor() // redondear hacia abajo
Math.abs() // valor absoluto
Math.max() // argumento más grande
Math.min() // argumento más pequeño
Math.random() // número pseudo aleatorio entre 0 y 1.0
Math.PI 
Math.E
Math.sqrt() // raíz cuadrada
Math.sin() // seno
Math.log() // logaritmo natural


// If overflow new value is raised Infinity or -Infinity
// If underflow a 0 is raised
// Division by zero is not an error in JavaScript
// Zero divided by zero raised NaN

// Hay un objeto llamado Number

Number.isNaN() // es NaN
Number.isInteger() // es entero
Number.isFinite() // es finito

// Binary floating-point can lead to errors in rounding

let x = .3 - .2;
let y = .2 - .1;
x === y // esto entregará falso, no son lo mismo para JavaScript

// DATES AND TIMES

let timestamp = Date.now(); // fecha actual
let now = new Date(); // fecha actual como un objeto
let ms = now.getTime(); // convierte a un timestamp de milisegundos
let iso = now.toISOString(); //convierte a un string

// TEXTO

""
'testing'
"3.14159265"

'two\nlines'
"one\
long\
line"

'You\'re right, it can\'t be a quote'

// Usar strings

let msg = 'Hello, ' + 'world';
let greeting = 'Welcome to my blog,' + ' ' + msg;

// Los strings se pueden comparar y tienen propiedades propias

let s = 'Hello, world';

//slicing
s.substring(1,4)
s.slice(1,4)
s.slice(-3)
s.split(', ')

//searching
s.indexOf('l')
s.indexOf('l',3)
s.indexOf('ff')
s.lastIndexOf('l')

//boolean searching
s.startsWith('Hell')
s.endsWith('!')
s.includes('or')

// modificar un string

s.replace('llo','ya')
s.toLowerCase()
s.toUpperCase()
s.normalize()
s.normalize('NFD')

s.length //largo del string



