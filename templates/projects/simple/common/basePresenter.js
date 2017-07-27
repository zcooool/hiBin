var view = require('./view')
//
exports.doAjaxThenOpenWindow = function(url,data,to){
	mui.ajax(url,{
		data:data,
		success:function(data){
			if(data.status==200){
				view.base.openWindow(to);
			}
		},
		error:function(){
			view.base.showMsg("访问请求失败")
		}
	})
}
