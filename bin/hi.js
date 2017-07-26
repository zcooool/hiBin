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


const projectDir = process.cwd();
// 当前模块模版的路径
const moduleTplDir =path.resolve(__dirname,'../templates/modules')
// 当前项目模版的路径
const projectTplDir = path.resolve(__dirname,'../templates/projects')


program
    .version('v0.1');
program
    .command('init <name>')
    .alias('i')
    .description('初始化一个项目')
    .action(function(name){
         genSimpleProject(name)    
    })
program
    .command('module <name>')
    .alias('m')
    .description('初始化一个模块')
    .option('-t,--type <type>','设置模块的模型，默认s（simple），可选 s|l')
    // .option('--s','是否为简单简单单页面')
    .action(function(name,option){
        console.log(name)
        

        if(option.type){
            switch(option.type){
                case 's':
                   genSimpleModule(name)
                    break;
                case 'l':
                    console.log('开始进行下拉刷新模块的生成...')
                    break;
                default: 
                    console.log('--type|-t 的值必须为在从[s,l]取')
                break;
            }
        }else{
           genSimpleModule(name);
        }
        
    })

program.command('build')
    .option('-d,--del','是否删除，默认保存原文件')
    .description('压缩css/js文件').action(function(option){
        // 压缩css
        gulp.src([`${projectDir}/module/*/*.css`,`!${projectDir}/module/*/*.min.css`
            ]) 
       
            .pipe(minifycss()).pipe(gulp.dest(`${projectDir}/module`))

        //压缩js
        gulp.src([`${projectDir}/module/*/*.js`,`!${projectDir}/module/*/*.min.js`])
            
        // .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest(`${projectDir}/module`));  //输出
        

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
            $('script[data-main]').attr('data-main','main.min.js');
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
function genSimpleModule(name){
    console.log(`开始生成简单模块-------'${name}'`) 
    
    console.log(`模版的生成路径：${projectDir}/module/${name}`)
    gulp.src(`${moduleTplDir}/simple/*`).pipe(gulp.dest(`${projectDir}/module/${name}`))
    console.log('生成完成');
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