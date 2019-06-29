const gulp = require("gulp");
// webpack
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config"); // webpackの設定ファイルの読み込み

// sass
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');



function styles (){

  const plugin = [
    autoprefixer({overrideBrowserslist: ['> 2%']}),
    mqpacker()
  ];

  return gulp
    .src(['./develop/sass/**/*scss'])
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(postcss(plugin))
    .pipe(gulp.dest('./client/css'));
}

function bundleJs(){

  return webpackStream(webpackConfig, webpack)
  .pipe(gulp.dest('./client/js'));

}

gulp.task('default',gulp.parallel(
  function(){
    return gulp.watch(['./develop/sass/**/*scss'],styles)
  },
  function(){
    return gulp.watch(['./develop/es2015/**/*.js'], bundleJs)
  },
));