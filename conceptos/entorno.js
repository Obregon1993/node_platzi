
let nombre=process.env.nombre|| 'sin nombre';//en caso de q no entremos ningun valor a la variable de entorno

let web=process.env.web||' no tengo niguna web'

console.log(`hola ${nombre}`);
console.log(`mi web es ${web}`);


//nombre=carlos node entorno.js