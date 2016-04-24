import gulp from 'gulp';
import { Server } from 'karma';
import eslint from 'gulp-eslint';
import path from 'path';

gulp.task('lint', () => {
  return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watch-lint', () => {
  return gulp.watch(['src/**/*.js'], ['lint']);
});

/**
 * Run test once and exit
 */
gulp.task('test', (done) => {
  new Server({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', ['watch-lint'], (done) => {
  new Server({
    configFile: path.join(__dirname, '/karma.conf.js')
  }, done).start();
});

gulp.task('default', ['tdd']);
