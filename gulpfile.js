var	gulp        = require('gulp')
  , browserSync = require('browser-sync')
  , sass        = require('gulp-sass')
  , reload      = browserSync.reload;

// Setup browser-sync
gulp.task('browser-sync', function () {
  browserSync({
    notify: false,
    server: {
      baseDir: ['site']
    },
  });
});

// Setup Sass to run when any Scss file changes, updating browsers after completion
gulp.task('sass', function () {
  gulp.src('site/scss/styles.scss')
    .pipe(sass({
      noCache: true,
      style: "expanded",
      lineNumbers: true
    }))
    .pipe(gulp.dest('site/css'))
    .pipe(reload({stream:true}));
});

gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch("site/scss/*.scss", ['sass']);
  gulp.watch(['site/**/*.html'], reload);
});
