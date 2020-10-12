let hola = (nombre, cb) => {
    //console.log('hola soy una funcion asincrona');
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        cb(nombre);
    }, 1000)
};

let hablar = (cb) => {
    setTimeout(() => {
        console.log('bla bla bla');
        cb();
    }, 1000)
}

let adios = (nombre, cb) => {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        cb();
    }, 1000);
}

let conversacion = (nombre, veces, cb) => {
    if (veces>=0){
        hablar(()=>{
            conversacion(nombre, --veces,cb);
        })
    }else{
        adios(nombre,cb)
    }
    
}

//------------- this is a callback hell
//console.log('inciando proceso')
// hola('Carlos', (nombre) => {
//     hablar(() => {
//         hablar(() => {
//             hablar(()=>{
//                 adios(nombre, () => {
//                     console.log('terminandoproceso');
//                 });
//             })

//         });

//     })


// });

// console.log('inciando proceso');
// hola('Carlos', (nombre) => {
//     adios(nombre, () => {
//         console.log('terminamos proceso');

//     })
// })

console.log('inciando proceso');
hola('Carlos',(nombre)=>{
    conversacion(nombre,3, ()=>{
        console.log('PROCESO TERMINADO')
    });
})
