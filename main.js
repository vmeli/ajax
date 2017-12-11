var list = document.getElementById('list-page');
var contentPage = document.getElementById('content-information');

function loadPage() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("content-information").innerHTML = this.responseText;
		}
	};
	xhr.open("GET", "boton1.html", true);
	xhr.send();
	console.log(xhr);
} 


list.addEventListener('click', loadPage);




// list.addEventListener('click', demo);

// function demo(e) {
// 	event.preventDefault();
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('GET', 'http://ajaxdemo.dev/boton2.html', true);
// 	xhr.addEventListener('readystatechange', function() {
//   if (xhr.readyState === 4) {
//     console.log(xhr.responseText);
//   }
// });
// }



	//console.log(e.target, 'entre');
// var listItem = document.getElementsByClassName('list-item');

// for (var i = 0; i > listItem.lenght; i++) {
	
// };