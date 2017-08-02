// 设置命令行的版本
const program  = require('commander')
const {projectDir,moduleTplDir,projectTplDir} = require('../config/paths.js')

const gulp = require('gulp')

program
    .version('v1.0.2');

