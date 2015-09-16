var getName = function(obj){
	return obj.name
}

console.log("This is function 1")
console.log(getName({ name: 'Luisa', age: 25}))


var totalLetters = function(arr){
	var value = 0
	for (var i =0; i < arr.length; i++){
	value += arr[i].length;
	}
	return value
} 
console.log("This is function 2")
console.log(totalLetters(['javascript', 'is', 'awesome']))



var keyValue = function(key, value){
	var obj = {}
	return obj[key] = value 

	// return {[key]: value} 

}
console.log ("this is function three")
console.log(keyValue('city', 'Denver'))

//function 4

var negativeIndex = function(arr, number){

	return arr[arr.length + number]

}
console.log("function4")
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1))
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))


// var array1 = function(arr){
// 	return arr.length
// }

// console.log(array1(['a', 'b', 'c', 'd', 'e']))


//function 6

var removeM = function(str){
	var arr = []
	for (var i=0; i <str.length; i++){
		if (str[i] !== 'm'){
			arr += str[i]
		}
	}
	return arr
}
console.log(removeM("family, memory, mammals"))


// var fruits = "Banana";
// fruits.split(" ");
// console.log(fruits)

//function 6, version 2.

var removeM = function(str){
	var value = ""
	for (var i =0; i < str.length; i++){
		if (str[i] !== 'm'){
			value += str[i]
			//value = str[i] + value
		}
	}
	return value

}
console.log(removeM("family, memory, mammals"))

//function 10

function unique(arr){
	var strings = ""
	for (var i = 0; i < arr.length; i++){
		if (arr[i] )
	}
}




