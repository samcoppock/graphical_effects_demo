var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
 
 
/* Task to compile less */
gulp.task('compile-less', function() {  
    gulp.src('./less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
}); 

/*Task to auto-prefix*/
//function recurrent_task(){
gulp.task('prefix', () =>
    gulp.src('./css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
        
//}
);

/* Task to watch less changes */
gulp.task('watch-less', function() {  
  gulp.watch('./less/**/*.less' , ['compile-less']);
//  gulp.watch('./css/**/*.css' , ['prefix']);
  livereload.listen();
  livereload.reload(['accademin_article_as_.html']);
});