// ----------------------------------- //
// ---------- Gulp packages ---------- //
// ----------------------------------- //

const config = require('./gulpConfig'),
  // General
  beep = require('beepbeep'),
  browserSync = require('browser-sync'),
  del = require('del'),
  gulp = require('gulp'),
  // Styles
  sass = require('gulp-sass')(require('sass')),
  sassGlob = require('gulp-sass-glob'),
  // SVG
  svg = require('gulp-svg-sprite')



// ----------------------------------- //
// -------------- Tasks -------------- //
// ----------------------------------- //

// HTML
function html(done) {
  if (!config.settings.html) return done()

  return gulp.src(config.html.src).pipe(gulp.dest(config.html.build))
}

// Styles
function styles(done) {
  if (!config.settings.styles) return done()

  return gulp
    .src(config.styles.src)
    .pipe(sassGlob())
    .pipe(sass())
    .on('error', swallowError)
    .pipe(gulp.dest(config.styles.build))
}

function toc(done) {
  if (!config.settings.toc) return done()

  return gulp
    .src(config.toc.src)
    .pipe(sassGlob())
    .pipe(sass())
    .on('error', swallowError)
    .pipe(gulp.dest(config.toc.build))
}

// Scripts
function scripts(done) {
  if (!config.settings.scripts) return done()

  return gulp.src(config.scripts.src).pipe(gulp.dest(config.scripts.build))
}

// Images
function images(done) {
  if (!config.settings.images) return done()

  return gulp.src(config.images.src).pipe(gulp.dest(config.images.build))
}

// SVG
function sprite(done) {
  if (!config.settings.svg) return done()

  return gulp
    .src(config.svg.src)
    .pipe(svg({ svg: config.svg.parameters, mode: config.svg.mode }))
    .pipe(gulp.dest(config.svg.build))
}

// Cleanup
function cleanup() {
  var paths = [config.paths.build]
  return del(paths)
}

// Watch
function watch() {
  browserSync.init(config.browserSync)

  if (config.settings.html) gulp.watch(config.html.src, html)
  if (config.settings.styles) gulp.watch(config.toc.watch, styles)
  if (config.settings.toc) gulp.watch(config.toc.watch, toc)
  if (config.settings.scripts) gulp.watch(config.scripts.src, scripts)
  if (config.settings.images) gulp.watch(config.images.src, images)
  if (config.settings.svg) gulp.watch(config.svg.src, sprite)
}

// Prevent errors from breaking gulp watch
function swallowError(error) {
  console.log(error.toString())
  beep()
  this.emit('end')
}

// ----------------------------------- //
// ------------- Commands ------------ //
// ----------------------------------- //

var run = gulp.parallel(html, styles, toc, scripts, images, sprite),
  dev = gulp.series(cleanup, run, watch)

gulp.task('default', dev)
