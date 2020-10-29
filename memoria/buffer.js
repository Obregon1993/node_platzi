//const buffer=Buffer.alloc(1);
//const buffer=Buffer.from([1, 2, 5]);

let buffer = Buffer.from('Hola')

console.log(buffer);
console.log(buffer.toString());

let abc = Buffer.alloc(26);
console.log(abc)
for (let index = 0; index < 26; index++) {
    abc[index]=index+97;
    
}
console.log(abc);
console.log(abc.toString());