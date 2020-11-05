let suma = 0;
console.time('bucle');


for (let index = 0; index < 100000000; index++) {

    suma += 1;
}
console.timeEnd('bucle');

// el ejemplo anterior para saber cuanto demora caa proceso

let suma2 = 0;
console.time('bucle2');


for (let index = 0; index < 1000000000; index++) {

    suma += 1;
}
console.timeEnd('bucle2');
////con funciones asincronas

const asincrona = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('termina el proceso asincrono');
            resolve;
        }, 1000);
    })
}
console.time('asincrono');
console.log('empieza el proceso asincrono')
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    });
