const { multiplicarNumero } = require('./helpers/multiplicar')
const { dividirNumero } = require('./helpers/dividir');
const { option } = require('yargs');
const argv = require('./config/yargs')
require('colors');




// const numero = 18;
// const divisor = 2;

console.clear();


// // console.log(process.argv);
// const [ , , arg3 = 'base=5'] = process.argv;

// const [ , numero = 5] = arg3.split('=');
// // console.log(numero)


// console.log(process.argv)
// console.log(argv)



multiplicarNumero(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch( err => console.log(err) );

// dividirNumero(numero, divisor)
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));

