let hola = (nombre) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            res(nombre);
        }, 1000)
    })

};

let hablar = (nombre) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('bla bla bla');
            res(nombre);
        }, 1000)
    })

}

let adios = (nombre) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            res();
        }, 1000);
    })

}

console.log('iniciando el proceso')
hola('Carlos')
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log('terminado el proceso')
    })
    .catch(error=>{
        console.error('ha habido un error');
        console.log(error)
    })

//esta ultima en caso de error
