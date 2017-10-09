const gulp =  require('gulp');
const connect =  require('gulp-connect');
const uglify =  require('gulp-uglify');
const css =  require('gulp-clean-css');
gulp.task('server',function () {
    connect.server({
        port: 3000,
        root: './',
        livereload: true
    });
    gulp.watch(['./dist/a.js'],['js']);
    gulp.watch(['./dist/style.css'],['css']);
})
gulp.task('js',function () {
    gulp.src('./js/a.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
})
gulp.task('css',function () {
    gulp.src('./css/style.css')
    .pipe(css())
    .pipe(gulp.dest('dist'));
})