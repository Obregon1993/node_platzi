const fs = require ('fs');

 const leer =(ruta)=>{
     fs.readFile(ruta, (err, data)=>{
         console.log(data.toString());
     })
 }
 //leer(__dirname+'/file.txt' )

 const escribir =(ruta, contenido,cb)=>{
     fs.writeFile(ruta, contenido, (err, data)=>{
        err? console.log('no se ha podido escribir ', err)
        :console.log('ya se ha escritoo');
     })
 }

 //escribir(__dirname+'/file.txt', 'soy un archivo nuevo',console.log)

 const borrar =(ruta, cb)=>{
     fs.unlink(ruta, cb);
 }

 borrar(__dirname+'/file.txt', console.log)