var nameBuilder = function(firstname='Joe', lastname='Doe'){
	console.log(firstname+ " "+ lastname)
}

//nameBuilder();

var createBox = function(){
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

window.onload = function(){
	nameBuilder();
	createBox();
}