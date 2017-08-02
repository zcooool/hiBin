
/**
 * 开发模式下
 */
const program = require('commander')
const {projectDir,moduleTplDir,projectTplDir} = require('../config/paths.js')
const _ = require('lodash')
const webpack = require('webpack')
const fs = require('fs')
const gulp = require('gulp')

program
    .description('开发模式中....')
    .command('develop')
    .alias('d')
    .action(function(){
        webpack(_.merge(require('../config/webpack.config.js')(projectDir), {
        watch: true
         })).watch(200, function(err, stats) {
            console.log(new Date() + ':文件修改完成')
         });        
    })