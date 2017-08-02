const path = require('path');
const projectDir = process.cwd();

// 当前模块模版的路径
const moduleTplDir =path.resolve(__dirname,'../templates/modules')
// 当前项目模版的路径
const projectTplDir = path.resolve(__dirname,'../templates/projects')

module.exports = {projectDir,moduleTplDir,projectTplDir}