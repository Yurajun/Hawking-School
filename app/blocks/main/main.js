/* global $ */
// console.log('ad');
// require('bowser');
import bowser from 'bowser';

const app = {};
app.browser = {};
app.browser.name = bowser.name;
app.browser.version = bowser.version;
app.browser.mac = bowser.mac;
console.log('bowser.name');
console.log(bowser.name);
window.app = app;

// function cBrowser() {
// 	const ua = navigator.userAgent;
// 	const bName = function () {
// 		if (ua.search(/MSIE/) > -1) {return 'ie';}
// 		if (ua.search(/Firefox/) > -1) {return 'firefox';}
// 		if (ua.search(/Opera/) > -1) {return 'opera';}
// 		if (ua.search(/Chrome/) > -1) {return 'chrome';}
// 		if (ua.search(/Safari/) > -1) {return 'safari';}
// 		if (ua.search(/Konqueror/) > -1) {return 'konqueror';}
// 		if (ua.search(/Iceweasel/) > -1) {return 'iceweasel';}
// 		if (ua.search(/SeaMonkey/) > -1) {return 'seamonkey';}
// 	}();
// 	const version = function () {
// 		if (navigator.userAgent.indexOf('MSIE') === -1
// 		|| navigator.appVersion.indexOf('Trident/') < 0) {
// 			switch (bName) {
// 				case 'ie' : return (ua.split('MSIE ')[1]).split(';')[0];
// 				case 'firefox' : return ua.split('Firefox/')[1];
// 				case 'opera' : return ua.split('Version/')[1];
// 				case 'chrome' : return (ua.split('Chrome/')[1]).split(' ')[0];
// 				case 'safari' : return (ua.split('Version/')[1]).split(' ')[0];
// 				case 'konqueror' : return (ua.split('KHTML/')[1]).split(' ')[0];
// 				case 'iceweasel' : return (ua.split('Iceweasel/')[1]).split(' ')[0];
// 				case 'seamonkey' : return ua.split('SeaMonkey/')[1];
// 			}
// 		}
// 	}(bName);
// 	if (navigator.userAgent.indexOf('MSIE') !== -1
// 	|| navigator.appVersion.indexOf('Trident/') > 0){
// 		return ['ie', 'ie version'];
// 	}

// 	return [bName, bName + version.split('.')[0], bName + version];
// }
// const currentBrowser = cBrowser();

// console.log(currentBrowser);


const $main = $('.js-line-gradient');
// const $document = $(document);

$main.on('mousemove', e => {
	// const canvasOffsetTop = $main.offset().top;
	// const scrollTop = $document.scrollTop();
	const mainWdth = $main.width();
	const offsetLeftPercent = e.clientX * 100 / mainWdth;
	console.log('X: ', e.clientX);
	// console.log('Y: ', e.clientY - (canvasOffsetTop - scrollTop));
	// $main.css({background: `linear-gradient(to right, #2d062d 0, #2d062d ${offsetLeftPercent}, #b5b66d 0, #b5b66d ${offsetLeftPercent})`});
	// $main.css({background: `-webkit-gradient(to right, #2d062d ${offsetLeftPercent / 2}, #b5b66d 100%)`});
	switch (bowser.name.toLowerCase()){
		case 'internet explorer':
			$main.css({
				// 'background-image': `-webkit-gradient(linear, left top, right top, color-stop(${offsetLeftPercent / 2}%, #2d062d), to(#b5b66d))`
				// 'background-image': `-webkit-linear-gradient(left, #2d062d ${offsetLeftPercent / 2}, #b5b66d 100%)`,
				// 'background-image': `-o-linear-gradient(left, #2d062d ${offsetLeftPercent / 2}, #b5b66d 100%)`,
				'background-image': `linear-gradient(to right, #2d062d ${offsetLeftPercent / 2}, #b5b66d 100%)`
			});
			console.log('ie');
			break;
		case 'chrome':
			$main.css({
				'background-image': `-webkit-gradient(linear, left top, right top, color-stop(${offsetLeftPercent / 2}%, #2d062d), to(#b5b66d))`
				// 'background-image': `-webkit-linear-gradient(left, #2d062d ${offsetLeftPercent / 2}, #b5b66d 100%)`,
				// 'background-image': `-o-linear-gradient(left, #2d062d ${offsetLeftPercent / 2}, #b5b66d 100%)`,
				// 'background-image': `linear-gradient(to right, #2d062d ${offsetLeftPercent / 2}, #b5b66d 100%)`
			});
			console.log('chrome');
			break;
		default:
			console.log('bowser.name.toLowerCase()', bowser.name.toLowerCase());
	}

	console.log(`linear-gradient(to right, #2d062d ${offsetLeftPercent / 2}, #b5b66d 100%)`);
});

// background-image: -webkit-gradient(linear, left top, right top, color-stop(25%, #2d062d), to(#b5b66d));
// background-image: -webkit-linear-gradient(left, #2d062d 25%, #b5b66d 100%);
// background-image: -o-linear-gradient(left, #2d062d 25%, #b5b66d 100%);
// background-image: linear-gradient(to right, #2d062d 25%, #b5b66d 100%);

// document.querySelector('.main').onmousemove = function (ev) {
// 	const canvasOffsetTop = $main.offset().top;
// 	const scrollTop = $document.scrollTop();
// 	heatmap.addData({
// 		x: ev.clientX,
// 		y: ev.clientY - (canvasOffsetTop - scrollTop),
// 		value: 1
// 	});
// };
