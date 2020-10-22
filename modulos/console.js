console.log('algo')
console.info('algo')// parece lo mismo pero para pluggins u otars opciones es diferentes
console.error('algo')// en otras terminales lo pinta de rojo como un warning

var table=[
    {a:1,
    b:2},
    {a:2,
    b:'otra'}
];

//console.table(table);

console.group('conversacion');
console.log('hola');
console.log('blabla');
console.log('adios');
console.groupEnd('conversacion');//esta ulima no necesita tener nada dentro
console.log('otra cosa de otra funcion')

//console.group()se utiliza para aprupar console.log, puede hacer como bucles poniendo grupos dentro de grupos

console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
console.count('veces')