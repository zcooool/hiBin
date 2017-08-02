
	var ejs = require('ejs');
	var mui = require('mui')
	var p = require('./presenter');
	
	var $btn_login = document.getElementById("loginBtn");

	
		var mainPage;
		

	function checkPreload() {
//			var noticeTab = plus.webview.getWebviewById("notice_sub");
//			var superviseTab = plus.webview.getWebviewById("supervise");
//			if (noticeTab && superviseTab) {
//				plus.nativeUI.closeWaiting();
//			} else {
//				setTimeout(checkPreload, 1000);
//			}
			var superviseLoadSucFlag = plus.storage.getItem("superviseLoadSucFlag");
			var noticeLoadSucFlag = plus.storage.getItem("noticeLoadSucFlag");
			if (superviseLoadSucFlag === "false" 
					|| noticeLoadSucFlag === "false") {
				setTimeout(checkPreload, 1000);
			} else {
				plus.nativeUI.closeWaiting();
			}
		}
	exports.init = function(){
		// 预加载标识位
		
		// 预加载页面的时候，显示等待框
		
var bodyWidth = plus.display.resolutionWidth;
		var bodyHeight = plus.display.resolutionHeight;

		document.getElementById("body1").style.backgroundSize= bodyWidth + "px " + bodyHeight + "px";
		

		mainPage = mui.preload({
	      	url:'../simple/tpl.html',
	      	id:'simple'
    	});
    	
		var password = document.getElementById('passwordInput');
		var username = document.getElementById("usernameInput");
		username.value = '15950455759';
		password.value = '111111';

		//事件的绑定
		$btn_login.addEventListener('tap',function(){
			var password = document.getElementById('passwordInput').value;
			var username = document.getElementById("usernameInput").value;
			plus.nativeUI.showWaiting('', {
				padlock: true
			});
			p.doLogin({username:username,password:password});
		})
//		
		// 禁用竖屏
//		plus.screen.lockOrientation("portrait-primary");
//		plus.navigator.setStatusBarBackground( "#F9F9F9" );
		
		
	}
	
	exports.jumpToMain = function() {
//		

		plus.nativeUI.closeWaiting();
		plus.navigator.setStatusBarBackground( "#0966a9" );

	    
		mainPage.show();
	}
	
	exports.showMsg = function(msg){
		plus.nativeUI.closeWaiting();
		mui.alert(msg);
	}
	
	exports.clearTxtPassword = function(){
      	document.getElementById('passwordInput').value = "";
	}
	
	exports.clearTxtUserName = function(){
		document.getElementById('usernameInput').value = "";
	}

