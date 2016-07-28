import gulp from "gulp";
import gulpsync from "gulp-sync";
import gulpLoadPlugins from "gulp-load-plugins";
import rename from "gulp-rename";
import uglify from "gulp-uglify";
import bom from "gulp-bom";
import sourcemaps from "gulp-sourcemaps";
gulpsync(gulp);
const $ = gulpLoadPlugins();
gulp.task("watch",()=>{
    gulp.watch("example/**/*.es6.js", ["babel"]);
});
gulp.task("babel", () => {
    return gulp.src("example/**/*.es6.js")
        .on("error", err => {
            console.error(err);
        }) // on error log
        .pipe(sourcemaps.init()) // sourcemap init
        .pipe($.babel()) // ES6 to ES5
        .pipe(uglify()) // minify js
        .pipe(bom()) // utf-8
        .pipe(rename(path => {
            path.basename = path.basename.replace(".es6","");
        })) // rename .es6.js to .js
        .pipe(sourcemaps.write(".")) // sourcemap write
        .pipe(gulp.dest(file => {
            return file.base;
        })); //output file
});
gulp.task("default", ["babel","watch"]);