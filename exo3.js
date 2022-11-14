var img = 1
var timer = setInterval(function() {
	img++
	$('img').attr('src', 'img/' + img + '.jpg');
	// document.getElementsByTagName('img')[0].src = 'img/' + img + '.jpg' (EN JAVASCRIPT)
	if (img === 6) {
		img = 0
	}
}, 1000);