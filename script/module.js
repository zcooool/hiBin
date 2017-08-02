// 初始化项目
const program = require('commander')
const {projectDir,moduleTplDir,projectTplDir} = require('../config/paths.js')

const gulp = require('gulp')

program
    .command('module <name>')
    .alias('m')
    .description('初始化一个模块')
    .option('-t,--type [type]','设置模块的模型，默认s（simple），可选 s|l','simple')
    // .option('--s','是否为简单简单单页面')
    .action(function(name,option){
        console.log(name)
        
        genSimpleModule(name,option.type);
        
        
    })

/**
 * 生成简单的模块
 * @param {string} name 
 */
function genSimpleModule(name,type){
    
    if(fs.existsSync(`${moduleTplDir}/${type}`)){
        console.log(`开始生成${type}模块-------'${name}'`) 
        console.log(`模版的生成路径：${projectDir}/module/${name}`)
        gulp.src(`${moduleTplDir}/${type}/*`).pipe(gulp.dest(`${projectDir}/module/${name}`))
        console.log(`完成模板生成操作，总花费 ${end-start} ms`);
    }else{
        console.log('无选择的模版，请正确选择模版');
    }
    
}