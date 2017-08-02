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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * 1. 自带全局变量mui，可直接使用\n */\n//初始化变量\n\n\n//添加事件\nvar moment = __webpack_require__(1)\nvar mui =__webpack_require__(2)\nvar view = __webpack_require__(3)\nconsole.log(moment().format('llll')+'开始执行模块simple的方法');\ndocument.getElementById('clickMe').addEventListener('tap',function(){\n\tview.base.showMsg('hello world');\n})\n\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./module/simple/main.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./module/simple/main.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = moment;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"moment\"\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = window.mui;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"window.mui\"\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22window.mui%22?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

eval("//处理与页面相关所有的单一功能的\n//var mui = require('mui');\nvar base =__webpack_require__(4)\nmodule.exports.base =  base\n\n\n//编写当前页面的视图变化代码\nexports.init = function(){\n\tconsole.log('加载了xxx')\n}\n\n\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./module/simple/view.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./module/simple/view.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("\n/**\n * 显示消息 \n * @param {Object} msg\n */\nexports.showMsg = function(msg){\n\tplus.nativeUI.toast(msg)\n}\n\n\nexports.openWindow= function(page){\n\tmui.openWindow(page,page)\n}\n\n/**\n * 设置元素的值\n * @param {Object} elem\n * @param {Object} val\n */\nexports.setVal = function(elem,val){\n\tdocument.getElementById(elem).value = val;\n}\n/**\n * 获取元素的val \n * @param {Object} elem\n */\nexports.getVal = function(elem){\n\treturn document.getElementById(elem).value;\n}\n\n/**\n *\t获取元素的text值 \n * @param {Object} elem\n */\nexports.getInnerText = function(elem){\n\treturn document.getElementById(elem).innerText;\n}\n/**\n * 设置元素的text值\n * \n * @param {Object} elem\n * @param {Object} text\n */\nexports.setInnerText = function(elem,text){\n\tdocument.getElementById(elem).innerText =  text;\n\t\n}\n\n\n\n\n\n/**\n * 显示加载 \n * @param {Object} msg\n */\nexports.showWaiting =function(msg){\n\t\n\tplus.nativeUI.showWaiting( msg);\n}\n/**\n * 关闭加载 \n */\nexports.closeWaiting =function(){\n\t\n\tplus.nativeUI.closeWaiting();\n}\n/**\n * \n * @param {Object} template 模版的编号\n * @param {Object} data 模版的数据\n * return {string} 解析完成的数据\n */\nexports.render = function(template,data,container){\n\t//如果container 存在，那么返回解析完成好的html\n\t//如果container 不存在，则直接挂载\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./common/baseView.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./common/baseView.js?");

/***/ })
/******/ ]);