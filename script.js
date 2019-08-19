var nameBuilder = function(firstname='Joe', lastname='Doe'){
	console.log(firstname+ " "+ lastname)
}

//nameBuilder();

//var createBox = function(){
var letBlock = function(){
	//for (var i = 0; i < 45; i++) {
	for (let i = 0; i < 45; i++) {
		var div = document.createElement('div');
		//var div = document.createElement('div id="divIndex'+i+'"');
		div.onclick = function(){
			alert('You clicked on a box #' +i)
		}
		document.getElementsByTagName('section')[0].appendChild(div)
	}
}


var constBlock = function(){
	/*const birthYear = 1987;
	var birthYear = 1987;
	var age = 2019 - birthYear;
	console.log( age );*/

	const birthYear = 1987;
	var age = 2019 - birthYear;
	console.log( age );
}

//function coldenough(deg){
var coldenough = function(deg){
	const freezingTemp = 32;

	if (freezingTemp <= deg) {
		return deg+' is above freezing.'
	}else{		
		return deg+' is below freezing.'
	}
}

window.onload = function(){
	nameBuilder();
	//createBox();
	letBlock();
	constBlock();
	console.log(coldenough(45));
}