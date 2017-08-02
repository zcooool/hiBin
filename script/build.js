const program = require('commander')
const {projectDir,moduleTplDir,projectTplDir} = require('../config/paths.js')

const gulp = require('gulp')

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

