#!/usr/bin/env node
const program  = require('commander')
const path = require('path')
const gulp = require('gulp'),
    del = require('del'),
     uglify = require('gulp-uglify'),
       minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin'),
    cheerio = require('gulp-cheerio')
const _ = require('lodash')
const webpack = require('webpack')
const fs = require('fs')








var filenames = fs.readdirSync(path.resolve(__dirname,'../script'))

filenames.forEach(function(file,index,arr){

    require('../script/'+file);

})
// require('./version.js')

// require('./init.js')

// require('./module.js')
// require('./publish.js')

// require('./develop.js')
// require('./build.js')


//解析命令
program.parse(process.argv);



















