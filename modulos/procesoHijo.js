const { exec, spawn } = require('child_process');


//esto es el equivalente de hacer la siguiente operacion ya q chiildproces tirene muchas librerias y no queremos requerirlas todas:
//const exec=require('child_process').exec;

// exec('ls -la', (err, stdout, sterr) => { // en window utilizas dir en ves de -ls -la
//     if (err) {
//         console.log(err);
//         return false;
//     };
//     console.log(stdout)
// })

exec('node modulos/console', (err, stdout, sterr) => { // en window utilizas dir en ves de -ls -la
    if (err) {
        console.log(err);
        return false;
    };
    console.log(stdout)
})

//esto sirve para llamar a otro proceso de node o de la terminal desde una funcion

let proceso= spawn('ls', ['-la']);

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data',(dato)=>{
    console.log(dato.toString());
});

proceso.on('exit',()=>{
    console.log('el proceso termino')
})