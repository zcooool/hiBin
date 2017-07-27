
/**
 * 显示消息 
 * @param {Object} msg
 */
exports.showMsg = function(msg){
	plus.nativeUI.toast(msg)
}


exports.openWindow= function(page){
	mui.openWindow(id:page,url：page)
}

/**
 * 设置元素的值
 * @param {Object} elem
 * @param {Object} val
 */
exports.setVal = function(elem,val){
	document.getElementById(elem).value = val;
}
/**
 * 获取元素的val 
 * @param {Object} elem
 */
exports.getVal = function(elem){
	return document.getElementById(elem).value;
}

/**
 *	获取元素的text值 
 * @param {Object} elem
 */
exports.getInnerText = function(elem){
	return document.getElementById(elem).innerText;
}
/**
 * 设置元素的text值
 * 
 * @param {Object} elem
 * @param {Object} text
 */
exports.setInnerText = function(elem,text){
	document.getElementById(elem).innerText =  text;
	
}





/**
 * 显示加载 
 * @param {Object} msg
 */
exports.showWaiting =function(msg){
	
	plus.nativeUI.showWaiting( msg);
}
/**
 * 关闭加载 
 */
exports.closeWaiting =function(){
	
	plus.nativeUI.closeWaiting();
}
/**
 * 
 * @param {Object} template 模版的编号
 * @param {Object} data 模版的数据
 * return {string} 解析完成的数据
 */
exports.render = function(template,data,container){
	//如果container 存在，那么返回解析完成好的html
	//如果container 不存在，则直接挂载
}
