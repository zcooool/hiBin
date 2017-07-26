define(function(require,exports,module){
	
	exports.inject = function(obj){
		
		console.log(obj)
		for (var o in obj) {
			console.log(o)
		}
	}
	
	
	exports.init=function(fn){
		fn.call();
	}
})