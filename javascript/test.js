# Commit 1

var a = function(){
	var b = 1;
	var c = 2;
	return b + c;
}

console.log(a.toString());


function functionDeclaration(){
	
	//All function in a script including nested ones are declared before any other code is run.
	//function definitions and declarations are hoisted to the top however function definitions 
	//are initialized where they are defined. However for function declarations both the name 
	//and definition is hoisted to the top.
	//console.log('nested functionDefinition:',nestedFunctionDefinition());
	console.log('nested functionDeclaration:', nestedFunctionDeclaration())
	
	var nestedFunctionDefinition = function(){
		return 'from functionDefinition';
	}
	
	function nestedFunctionDeclaration(){
		return 'from nestedFunction declaration'
	}
}


functionDeclaration();


var o = {
	a:1,
	b:2,
	c:3,
	
	afunc: function(){
		console.log(this.constructor.prototype);
	}
}

Object.defineProperty(o,'d',{
	value:4,
	writable:true,
	enumerable:false,
	configurable:true
});

console.log("o:",o);
console.log("o.d:", o.d);

console.log("getOwnPropertyNames:",Object.getOwnPropertyNames(o));

//non-enumerable properties are not listed when iterating using in
function printObjectProperties(o){
	for( property in o){
	
		console.log(property+':',o[property]);
	}
}

//JSON stringify
var oJson = JSON.stringify(o);
console.log('oJson',oJson);




//Creating an object using Object.create

var myObj = Object.create({
	a:1,
	b:2,
	e:3
});

console.log('myObj',myObj);

printObjectProperties(myObj);
