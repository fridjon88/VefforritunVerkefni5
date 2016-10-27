const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync').create();

gulp.task('lint-javascript', () => {
  return gulp.src(['src/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('serve', function() {

  browserSync.init({
    server: './',
  });

  gulp.watch(['./*.html', 'src/*']).on('change', browserSync.reload);
  gulp.watch('src/*.js', ['babel']);
});

gulp.task('babel', () => {
  return gulp.src('src/*.js')
        .pipe(babel({
          presets: ['es2015'],
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('lint', ['lint-javascript']);

gulp.task('default', ['lint-javascript', 'babel', 'serve']);
