const {parallel, watch} = require('gulp');

const fonts = require('./gulp-tasks/fonts.js');

const images = require('./gulp-tasks/images.js');

//put in each task
const sass = require('./gulp-tasks/sass.js');

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.

const watcher = () => {
    watch('./src/scss/**/*.scss', {ignoreInitial: true}, sass);
    watch('./src/images/**/*', {ignoreInitial: true}, images);
};

//If someone runs gulp is to run each in parallel
exports.default = parallel(fonts, images, sass);

exports.watch = watcher;