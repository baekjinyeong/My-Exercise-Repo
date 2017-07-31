//= require ../_vendor/library.js

/*! _common.js */
(function () {

	var btn = document.getElementsByClassName('button'),
		layerWrapper = document.getElementsByClassName('layer-wrapper'),
		layerDimd = document.getElementsByClassName('dimd'),
		layerClose = document.getElementsByClassName('close');

	btn[0].addEventListener('click', function(e){
	    layerWrapper[0].style.display = 'block';
		console.log('hell');
	});

	layerClose[0].addEventListener('click', function(e){
		layerWrapper[0].style.display = 'none';
		console.log('close');
	});

	// dimd 부분 클릭 시 레이어 닫힘
	window.addEventListener('click', function(e){
		if (e.target === layerDimd[0]) {
	        layerWrapper[0].style.display = 'none';
			console.log('1');
	    }
		console.log(e.target);
		console.log(layerDimd);
	});

	// esc 눌렀을 때 레이어 닫힘
	window.addEventListener('keydown', function(e) {
		var keycodeEsc =  27;
		console.log(e.which);

		if (e.which === keycodeEsc) {
			layerWrapper[0].style.display = 'none';
		}
	});
}());
