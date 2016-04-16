import gulp from 'gulp';
import { Server } from 'karma';
import jscs from 'gulp-jscs';

gulp.task('format', () => {
  return gulp.src('./src/**/*.js')
    .pipe(jscs({
      fix: true
    }))
    .pipe(gulp.dest('src'));
})

/**
 * Run test once and exit
 */
gulp.task('test', (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('default', ['tdd']);
