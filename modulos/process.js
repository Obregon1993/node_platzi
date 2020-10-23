//const process = require('process');
//no hay q exportarlo porque es un modulo global

process.on('exit', () => {
    console.log('el proceso acabo yaaaa');

    setTimeout(()=>{console.log('esto no se va a ver nunk')},0)
});
setTimeout(()=>{console.log('esto si se va a ver')},0)
//una vez se ha ejecutado completamente del even loop por lo q si pones un settimeout no saldra

process.on('beforeExit', () => {
    console.log('el proceso va a terminar ya casi');
});


process.on('uncaughtException',(err, origen)=>{
    console.error('vaya se nos ha olvidado capturar un error');
    setTimeout(()=>{console.log('esto viene desde la captura de errores')},0)
    //console.error(err);   
});
// esto regoge los errores de manera q te lo sennala pero a la misma vez permite q el hilo siga y ejecutar los otros procesos
funtionQueNoExiste();

console.log('Esto si error no se recoge, no sale');



