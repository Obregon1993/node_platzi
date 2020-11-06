const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', (cb)=>{
    console.log('construyendo el sitio');
    setTimeout(cb, 1200);
    
})
//esto abrira el server e incluso con solo cambiar el html y guardar luego refrescar el broser se hara
gulp.task('serve',(cb)=>{
    gulp.src('www')
    .pipe(server({
        livereload: true,
        open: true
    }))
});
//para definir un conjunto de tareas
gulp.task('default', gulp.series('build', 'serve'));