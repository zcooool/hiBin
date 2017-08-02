/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

eval("//执行方法\nvar view = __webpack_require__(9)\n\t\tmui.plusReady(function(){\n\t\t\tview.init();\n\t\t})\n\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./module/login/main.js\n// module id = 19\n// module chunks = 0\n\n//# sourceURL=webpack:///./module/login/main.js?");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

eval("module.exports = ejs;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"ejs\"\n// module id = 20\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22ejs%22?");

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

eval("\n\tvar view = __webpack_require__(9);\n\tvar http = __webpack_require__(50)\n\tvar mui = __webpack_require__(6);\n\t\n\texports.doLogin = function(user) {\n\t\tconsole.log(http.LOGIN)\n\t\t\n\t\tvar phoneType;\n\t\tif (mui.os.android){\n\t\t\tphoneType = 'Android';\n\t\t}else{\n\t\t\tphoneType = 'IOS';\n\t\t}\n//\t\tvar info = plus.push.getClientInfo();\n\n\t\tvar param1 = {\n\t\t\ttranstime:\"20170727105656\",\n\t\t\tUserID:user.username,\n\t\t\tPassword:\"MTExMTEx\",\n\t\t\tClientID:\"123\",\n\t\t\t\n\t\t\tPhoneType:phoneType\n\t\t};\n\t\tconsole.log(http.LOGIN);\n\t\tconsole.log(JSON.stringify(param1));\n\t\t\n\t\tmui.ajax({\n\t\t\turl:http.LOGIN,\n\t\t\tdata:param1,\n\t\t\ttype:'POST',\n\t\t\tsuccess:function(res) {\n\t\t\t\tvar resObj = JSON.parse(res);\n\t\t\t\tconsole.log(res);\n//\t\t\t\tif (resObj.result == 1) {\n\t\t\t\t\tplus.storage.setItem(\"token\",resObj.Token);\n\t\t\t\t\tplus.storage.setItem(\"username\",user.username);\n\t\t\t\t\tview.jumpToMain();\n//\t\t\t\t} else {\r\n//\t\t\t\t\tview.showMsg(resObj.message);\r\n//\t\t\t\t}\n\t\t\t},\n\t\t\terror:function() {\n\t\t\t\tconsole.log(\"登录网络错误\");\n\t\t\t\tview.showMsg(\"网络错误，请稍后重试\");\n\t\t\t},\n\t\t\ttimeout:2000\n\t\t});\n\n\t\t\n\t}\n\t\n\texports.reset =function(){\n\t\tconsole.log('执行reset的方法')\n\t\tview.clearTxtPassword();\n\t\tview.clearTxtUserName();\n\t}\n\t\n\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./module/login/presenter.js\n// module id = 21\n// module chunks = 0\n\n//# sourceURL=webpack:///./module/login/presenter.js?");

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require,exports,module){\n\t\n\n//\tvar server_path = \"http://124.115.170.195:8008/com.hsnn.std/app/\";\n//\tmodule.exports =  (function(env){\n//\t\treturn {\n//\t\t\tLOGIN:server_path + \"getUser.html\",\n//\t\t\tNOTICE:server_path + \"getNotice.html\",\n//\t\t\tMESSAGE:server_path + \"getMessage.html\",\n//\t\t\tABOUT_COMPANY:'http://www.elian.net/api/common/GetCompanyInfo',\n//\t\t}\n//\t})('debug')\n\t\n\tvar server_path = \"http://124.115.170.195:8008/com.hsnn.std/app/\";\n\tmodule.exports =  (function(env){\n\t\treturn {\n\t\t\tTIME_OUT:2000,\n//\t\t\tLOGIN:\"http://trade.zgyxcgw.cn:8092/tradeInterface/v1/appInterface/login/login\",\n\t\t\tLOGIN:\"http://www.elian.net/api/common/Login\",\n\t\t\tNOTICE:\"http://www.elian.net/api/common/FullSearch\",\n\t\t\tMESSAGE:server_path + \"getMessage.html\",\n\t\t\tABOUT_COMPANY:'http://www.elian.net/api/common/GetCompanyInfo',\n\t\t}\n\t})('debug')\n\t\n\t\n\n}.call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./config/http.js\n// module id = 50\n// module chunks = 0\n\n//# sourceURL=webpack:///./config/http.js?");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

eval("module.exports = window.mui;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"window.mui\"\n// module id = 6\n// module chunks = 0 1\n\n//# sourceURL=webpack:///external_%22window.mui%22?");

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

eval("\n\tvar ejs = __webpack_require__(20);\n\tvar mui = __webpack_require__(6)\n\tvar p = __webpack_require__(21);\n\t\n\tvar $btn_login = document.getElementById(\"loginBtn\");\n\n\t\n\t\tvar mainPage;\n\t\t\n\n\tfunction checkPreload() {\n//\t\t\tvar noticeTab = plus.webview.getWebviewById(\"notice_sub\");\n//\t\t\tvar superviseTab = plus.webview.getWebviewById(\"supervise\");\n//\t\t\tif (noticeTab && superviseTab) {\n//\t\t\t\tplus.nativeUI.closeWaiting();\n//\t\t\t} else {\n//\t\t\t\tsetTimeout(checkPreload, 1000);\n//\t\t\t}\n\t\t\tvar superviseLoadSucFlag = plus.storage.getItem(\"superviseLoadSucFlag\");\n\t\t\tvar noticeLoadSucFlag = plus.storage.getItem(\"noticeLoadSucFlag\");\n\t\t\tif (superviseLoadSucFlag === \"false\" \n\t\t\t\t\t|| noticeLoadSucFlag === \"false\") {\n\t\t\t\tsetTimeout(checkPreload, 1000);\n\t\t\t} else {\n\t\t\t\tplus.nativeUI.closeWaiting();\n\t\t\t}\n\t\t}\n\texports.init = function(){\n\t\t// 预加载标识位\n\t\t\n\t\t// 预加载页面的时候，显示等待框\n\t\t\nvar bodyWidth = plus.display.resolutionWidth;\n\t\tvar bodyHeight = plus.display.resolutionHeight;\n\n\t\tdocument.getElementById(\"body1\").style.backgroundSize= bodyWidth + \"px \" + bodyHeight + \"px\";\n\t\t\n\n\t\tmainPage = mui.preload({\n\t      \turl:'../simple/tpl.html',\n\t      \tid:'simple'\n    \t});\n    \t\n\t\tvar password = document.getElementById('passwordInput');\n\t\tvar username = document.getElementById(\"usernameInput\");\n\t\tusername.value = '15950455759';\n\t\tpassword.value = '111111';\n\n\t\t//事件的绑定\n\t\t$btn_login.addEventListener('tap',function(){\n\t\t\tvar password = document.getElementById('passwordInput').value;\n\t\t\tvar username = document.getElementById(\"usernameInput\").value;\n\t\t\tplus.nativeUI.showWaiting('', {\n\t\t\t\tpadlock: true\n\t\t\t});\n\t\t\tp.doLogin({username:username,password:password});\n\t\t})\n//\t\t\n\t\t// 禁用竖屏\n//\t\tplus.screen.lockOrientation(\"portrait-primary\");\r\n//\t\tplus.navigator.setStatusBarBackground( \"#F9F9F9\" );\n\t\t\n\t\t\n\t}\n\t\n\texports.jumpToMain = function() {\n//\t\t\n\n\t\tplus.nativeUI.closeWaiting();\n\t\tplus.navigator.setStatusBarBackground( \"#0966a9\" );\n\n\t    \n\t\tmainPage.show();\n\t}\n\t\n\texports.showMsg = function(msg){\n\t\tplus.nativeUI.closeWaiting();\n\t\tmui.alert(msg);\n\t}\n\t\n\texports.clearTxtPassword = function(){\n      \tdocument.getElementById('passwordInput').value = \"\";\n\t}\n\t\n\texports.clearTxtUserName = function(){\n\t\tdocument.getElementById('usernameInput').value = \"\";\n\t}\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./module/login/view.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./module/login/view.js?");

/***/ })

/******/ });