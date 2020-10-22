const otraFunction = () => {
    seRompe();
};

const seRompe = () => {
    return 3 + z;
};

const seRompeAsincrona = () => {
    setTimeout(() => {
        return 3 + z;
    }, 2000)
};

try {
    otraFunction();
    //seRompeAsincrona(); // asi se va a romper lo mejor seria meter el ry catch dentro de la funcion asincrona
} catch (error) {
    console.error('algo se ha roto');
    console.error(error.message);
    console.log('no pasa nada, lo hemos capturado')
}

console.log('esto esta al final')