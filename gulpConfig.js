// ------------------------------------ //
// --------- Settings & Paths --------- //
// ------------------------------------ //

const rootPath = './exercice',
  srcPath = rootPath + '/assets',
  buildPath = rootPath + '/build'

module.exports = {
  settings: {
    styles: true,
    toc: true,
    scripts: true,
    svg: true,
    images: true,
    html: true,
  },
  paths: {
    build: buildPath,
  },
  html: {
    src: rootPath + '/content/**/*.html',
    build: buildPath,
  },
  styles: {
    src: srcPath + '/styles/styles.scss',
    watch: srcPath + '/styles/**/*.scss',
    build: buildPath + '/css',
  },
  toc: {
    src: srcPath + '/styles/toc.scss',
    watch: srcPath + '/styles/**/*.scss',
    build: srcPath + '/styles',
  },
  scripts: {
    src: srcPath + '/scripts/**/*.js',
    build: buildPath + '/js',
  },
  images: {
    src: srcPath + '/images/**/*.+(png|jpg|jpeg|gif|svg)',
    build: buildPath + '/img',
  },
  svg: {
    src: srcPath + '/svg/**/*.svg',
    mode: {
      stack: {
        dest: './',
        sprite: 'sprite.svg',
        bust: false,
      },
    },
    build: buildPath + '/img',
    parameters: {
      xmlDeclaration: false,
      doctypeDeclaration: false,
      dimensionAttributes: false,
    },
  },
  browserSync: {
    server: {
      baseDir: buildPath,
    },
    open: false,
    watch: true,
  },
}
