
const fs = require('fs')
const path = require('path')
const glob = require('glob');


function getAlias(dir) {
  
    return {
        // 特殊
        'moment': path.resolve(dir, './library/moment/moment.js'),
        'ejs':path.resolve(dir,'./library/ejs/ejs.min.js'),
        'echarts':path.resolve(dir,'./library/echarts/echarts.min.js')
    };
};
function getEntry(dir){
    var files = glob.sync(dir+'/module/*/main.js')
    // console.log(dir+'/module/*/main.js');
    var res ={};
    files.forEach(function(file){
        var relativePath =path.relative(dir,file),
        
        relativeName = relativePath.slice(0, relativePath.lastIndexOf('/'));
        
        res[relativeName] = './' + relativePath;
    });

    return res;
}
module.exports = function(dir){
    return {
        context:dir,
        entry:getEntry(dir),
        output:{
            filename:'[name]/out.js',
            path:`${dir}`
        },
         devtool: "eval",
         externals: {
            mui: 'window.mui',
            moment:'moment',
            ejs:'ejs',
            echarts:'echarts'
        },
        resolve: {
            alias: getAlias(dir)
        }
        
    }
}

