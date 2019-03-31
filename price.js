var btn = document.querySelector('#btn');
var bitprice = document.querySelector('#bitprice');

btn.addEventListener('click', function(){
	var XHR = new XMLHttpRequest();
	XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
	XHR.onreadystatechange = function(){
		if(XHR.readyState === 4 && XHR.status === 200) {
			var response = XHR.responseText;
			var parsedResponse = JSON.parse(response);
			bitprice.innerText = parsedResponse.bpi.USD.rate + ' ' + parsedResponse.bpi.USD.code;
		}
	}
	XHR.send();	
});