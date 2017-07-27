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

const projectDir = process.cwd();
// 当前模块模版的路径
const moduleTplDir =path.resolve(__dirname,'../templates/modules')
// 当前项目模版的路径
const projectTplDir = path.resolve(__dirname,'../templates/projects')


// 设置命令行的版本
program
    .version('v0.1');

// 初始化项目
program
    .command('init <name>')
    .alias('i')
    .description('初始化一个项目')
    .action(function(name){
         genSimpleProject(name)    
    })
// 初始化模块 
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

program
    .description('开发模式中....')
    .command('develop')
    .alias('d')
    .action(function(){
        webpack(_.merge(require('./webpack.config.js')(projectDir), {
        watch: true
         })).watch(200, function(err, stats) {
            console.log('文件修改完成')
         });        
    })

program.command('publish').action(function(){
    webpack(require('./webpack.config.js')(projectDir),function(err,state){
        console.log('编译完成...');
    });
    gulp.src(`${projectDir}/**/*`).pipe(gulp.dest(`${projectDir}/out`));
}).description('发布项目')



program.command('build')
    .option('-d,--del','是否删除，默认保存原文件')
    .description('压缩css/js文件').action(function(option){
        // 压缩css
        gulp.src([`${projectDir}/module/*/*.css`,`!${projectDir}/module/*/*.min.css`
            ]) 
       
            .pipe(minifycss()).pipe(gulp.dest(`${projectDir}/module`))

       
        // 压缩html
        var HTMLoptions = {
            removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
            minifyJS: true,//压缩页面JS
            minifyCSS: true//压缩页面CSS
        };
        gulp.src([`${projectDir}/module/*/*.html`]).pipe(cheerio(function($){
            // console.log($('script[data-main]'))
            // $('script[data-main]').attr('data-main','main.min.js');
            // $('link[href$="/custom.css"]').attr('href','./custom.min.css')
        })).pipe(htmlmin(HTMLoptions)).pipe(gulp.dest(`${projectDir}/module`))
        

        if(option.del){
            console.log('正在删除原始文件');
        }
    })








    program.parse(process.argv);











/**
 * 生成简单的模块
 * @param {string} name 
 */
function genSimpleModule(name,type){
    
    if(fs.existsSync(`${moduleTplDir}/${type}`)){
        console.log(`开始生成${type}模块-------'${name}'`) 
        console.log(`模版的生成路径：${projectDir}/module/${name}`)
        gulp.src(`${moduleTplDir}/${type}/*`).pipe(gulp.dest(`${projectDir}/module/${name}`))
        console.log('生成完成');
    }else{
        console.log('无选择的模版，请正确选择模版');
    }
    
}

/**
 * 生成单一的项目模块
 * @param {string} name 
 */
function genSimpleProject(name){
    console.log(`开始生成简单项目-------'${name}'`)      
    console.log(`项目的生成路径：${projectDir}`)
    gulp.src(`${projectTplDir}/simple/*`).pipe(gulp.dest(`${projectDir}/${name}`))
    console.log('生成完成');
}