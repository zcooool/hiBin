/**
 * 执行者层
 * 作用：  
 * 1. 负责视图层功能的整合
 * 2.  负责业余的逻辑入口
 * 		
 * 约定
 * 1. 方法定义为：export.doXXX = function(){}
 * 2. 不要去是定义关于view层的修改视图的方法
 */

var base = require('../../common/basePresenter.js')
exports.base = base;
var view = require('./view')

//编写你的业务.....



