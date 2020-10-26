const sharp = require('sharp');

sharp('original.png')
.resize(80)
.toFile('resized.png');

//modulo para cortar fotos, pasarlas a blanco y negro, renomprarlas y exportarlas como nuevos archivos