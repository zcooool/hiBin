/**
 * 1. 自带全局变量mui，可直接使用
 */
//初始化变量


//添加事件
var moment = require('moment')
var mui =require('mui')
var view = require('./view')
console.log(moment().format('llll')+'开始执行模块simple的方法');
document.getElementById('clickMe').addEventListener('tap',function(){
	view.base.showMsg('hello world');
})


