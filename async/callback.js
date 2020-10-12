let hola = (nombre, cb) => {
    //console.log('hola soy una funcion asincrona');
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        cb(nombre);
    }, 1000)
};

let adios = (nombre, cb) => {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        cb();
    }, 1000);
}

console.log('inciando proceso')
hola('Carlos', (nombre) => {
    adios(nombre, ()=>{
        console.log('terminandoproceso');
    })
    
});

