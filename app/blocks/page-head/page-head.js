// /* global $ */
// import h337 from 'heatmap.js';

// const heatmap = h337.create({
// 	container: document.querySelector('.main'),
// 	radius: 15,
// 	maxOpacity: 0.5,
// 	minOpacity: 0,
// 	blur: 0.75
// });

// const $main = $('.main');
// const $document = $(document);

// document.querySelector('.main').onmousemove = function (ev) {
// 	const canvasOffsetTop = $main.offset().top;
// 	const scrollTop = $document.scrollTop();
// 	heatmap.addData({
// 		x: ev.clientX,
// 		y: ev.clientY - (canvasOffsetTop - scrollTop),
// 		value: 1
// 	});
// };

/*
heatmap.setData({
	max: 5,
	data: [{x: 600, y: 15, value: 5}]
});
*/
