
const program = require('commander')
const {projectDir,moduleTplDir,projectTplDir} = require('../config/paths.js')

const gulp = require('gulp')
/**
 * 发布阶段
 */
program.command('publish').action(function(){
    webpack(require('../config/webpack.config.js')(projectDir),function(err,state){
        console.log('编译完成...');
    });
    gulp.src(`${projectDir}/**/*`).pipe(gulp.dest(`${projectDir}/out`));
}).description('发布项目')

