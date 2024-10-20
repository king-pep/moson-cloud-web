const gulp = require("gulp");
const gap = require("gulp-append-prepend");
const replace = require("gulp-replace");
const moment = require("moment");

// Generate the version string with a timestamp
const version = 'v1.1.' + moment().format('YYYY-MM-DD-HH-mm');

// Task to replace the version in files and append the version to the project
gulp.task('replace-version-and-append-to-project-version', function () {
    return new Promise(function (resolve, reject) {
        // Target the built index.html or main.js file in your build directory
        gulp.src('./build/index.html') // or main.js if you're targeting JS
            .pipe(replace('Version Placeholder', version)) // Replace the version placeholder
            .pipe(replace('Date Placeholder', moment().format('YYYY-MM-DD'))) // Replace the date placeholder
            .pipe(gulp.dest('./build', {overwrite: true})); // Overwrite the output in the build folder
        resolve();
    });
});

// Run the task with the command 'gulp replace-version-and-append-to-project-version'
gulp.task('replace', gulp.series('replace-version-and-append-to-project-version'));


gulp.task("licenses", async function () {
    // this is to add Creative Tim licenses in the production mode for the minified js
    gulp
        .src("build/static/js/*chunk.js", {base: "./"})
        .pipe(
            gap.prependText(`/*!

=========================================================
* Notus React - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
        )
        .pipe(gulp.dest("./", {overwrite: true}));

    // this is to add Creative Tim licenses in the production mode for the minified html
    gulp
        .src("build/index.html", {base: "./"})
        .pipe(
            gap.prependText(`<!--

=========================================================
* Notus React - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
        )
        .pipe(gulp.dest("./", {overwrite: true}));

    // this is to add Creative Tim licenses in the production mode for the minified css
    gulp
        .src("build/static/css/*chunk.css", {base: "./"})
        .pipe(
            gap.prependText(`/*!

=========================================================
* Notus React - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
        )
        .pipe(gulp.dest("./", {overwrite: true}));
    return;
});
