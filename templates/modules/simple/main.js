console.log('加载了/module/主页/main');

//官方指出require('name')的写法只能在define()或者require()的回调中
//对于mui而言，他在当前页面下不仅是一个工具类，同时也是一个全局变量的
//通过全局的mui引入。将mui全局引入到

define(function(require,exports,module){
	var tools = require('../../library/js/tools');
	var v = require('./view')
	var p = require('./presenter')
//	tools.init(v.init)
	tools.inject(v)
})
//require(['./model','./view','./presenter'],function(m,v,p){
//	
//})


	

//require(['../../config/libConfig'],function(){
//	require('mui');
//});
