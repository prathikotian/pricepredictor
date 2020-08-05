const api = 'https://api.coindesk.com/v1/bpi/currentprice.json';
let btn = document.querySelector('#btn');
let bitprice = document.querySelector('#bitprice');

window.onload = () => {
	let XHR = new XMLHttpRequest();
	XHR.open('GET', api);
	XHR.onreadystatechange = function () {
		if(XHR.readyState === 4 && XHR.status === 200) {
			let response = XHR.responseText;
			let parsedResponse = JSON.parse(response);
			bitprice.innerText = parsedResponse.bpi.USD.rate + ' ' + parsedResponse.bpi.USD.code;
		}
	}
	XHR.send();	
};

btn.addEventListener('click', function(){
	let XHR = new XMLHttpRequest();
	XHR.open('GET', api);
	XHR.onreadystatechange = function(){
		if(XHR.readyState === 4 && XHR.status === 200) {
			let response = XHR.responseText;
			let parsedResponse = JSON.parse(response);
			bitprice.innerText = parsedResponse.bpi.USD.rate + ' ' + parsedResponse.bpi.USD.code;
		}
	}
	XHR.send();	
});