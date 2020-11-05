const http = require('http');

//asi seria normal el otro ejemplo es para hacerlo mas funcional utilizando la funcion router

// http.createServer((req, res) => {
//     console.log('nueva peticion');
//     console.log(req.url);
//     //escribir respuesta al usuario

//     res.writeHead(201, {'Content-Type': 'text/plain'})

//     res.write('hola, ya se escribir usando http');
//     res.end();
// }).listen(3000);

// console.log('escuchando en el puerto 3000')
//---------------------------------------------------------------------
http.createServer(router).listen(3000);
//este tipo de funcion no es legible para http, deberia ser sin es6
// const router=(req, res) => {
//     console.log('nueva peticion');
//     console.log(req.url);
//     //escribir respuesta al usuario

//     res.writeHead(201, {'Content-Type': 'text/plain'})

//     res.write('hola, ya se escribir usando http');
//     res.end();
// }
//--------------------------------------------
function router(req, res) {
    console.log('nueva peticion');
    console.log(req.url);
    //escribir respuesta al usuario
    switch (req.url) {
        case '/hola':
            let saludo=hola();
            res.write(saludo)
            res.write('Hola, que tal')
            res.end();
            break;

        default:
            res.write('Error 404: nose lo que kieres');
            res.end();
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' })

    // res.write('hola, ya se escribir usando http');
    // res.end();
}
const hola=()=>{
    return 'hola q tal'
}

console.log('escuchando en el puerto 3000');

