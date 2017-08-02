// 初始化项目

const {projectDir,moduleTplDir,projectTplDir} = require('../config/paths.js')
const program = require('commander')
const gulp = require('gulp')

program
    .command('init <name>')
    .alias('i')
    .description('初始化一个项目')
    .option('-t,--type [type]','设置项目的模型，默认simple','simple')
    .action(function(name,option){
         genSimpleProject(name,option.type)
             
    })


/**
 * 生成单一的项目模块
 * @param {string} name 
 */
function genSimpleProject(name,type){
    let start = new Date().getTime();
     console.log(`开始生成${type}项目-------'${name}'`)      
    console.log(`项目的生成中... 复制${projectTplDir}/${type}/下文件到 ${projectDir}/${name}`)
    gulp.src(`${projectTplDir}/${type}/**`)

    .pipe(gulp.dest(`${projectDir}/${name}`))
    
    let end = new Date().getTime();
    console.log(`完成项目初始化操作，总花费 ${end-start} ms`);
}