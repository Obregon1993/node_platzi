let hola = async (nombre) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            res(nombre);
        }, 1000)
    })

};

let hablar = async (nombre) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('bla bla bla');
            res(nombre);
        }, 1000)
    })

}

let adios = async (nombre) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            res();
        }, 1000);
    })

}

const main = async () => {
    let nombre = await hola('carlos');
    await hablar();
    await hablar();
    await adios(nombre);

}
console.log('before')
main();
console.log('after')