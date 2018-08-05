/* global ymaps */

function init(){
	const myMap = new ymaps.Map('map', { // eslint-disable-line no-unused-vars
		center: [55.76, 37.64],
		zoom: 7
	});
}

ymaps.ready(init);
