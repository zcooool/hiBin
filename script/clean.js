/**
 * 清空模版
 */
const program  = require('commander')
const {projectDir,moduleTplDir,projectTplDir} = require('../config/paths.js')

const gulp = require('gulp')

program.command('clean')
        .description('清空操作')
        .action(function(options){
            let start = new Date().getTime();
            console.log('开始执行情况操作')
            let end = new Date().getTime();
            console.log(`完成清空操作，总花费 ${end-start} ms`);
        })