const {app, BrowserWindow}= require('electron');

let ventanaPrincipal;

app.on('ready',crearVentana);

// const crearVentana=()=>{
//     ventanaPrincipal= new BrowserWindow({
//         width:800,
//         height:600,
        
//     });

//     ventanaPrincipal.loadFile('index.html');
// }
//ojo no puede ser creada esta funcion es es6

function crearVentana() {
    ventanaPrincipal= new BrowserWindow({
        width:800,
        height:600,
        
    });

    ventanaPrincipal.loadFile('index.html');
}
