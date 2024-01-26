const fs = require('fs');

const dividirNumero = async( base, divisor) => {
    try {
        console.log('Vamos a dividir el numero:', base, ' entre el numero:', divisor);
        console.log('====================================================')

        console.log(`El resultado es = ${base/divisor}`);
        
        return 'Exito';


    } catch (error) {
        throw error;
    }
}

module.exports = {dividirNumero};