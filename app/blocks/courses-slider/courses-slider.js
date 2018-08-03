/* global $ */

// import 'slick-carousel';

// $('.js-courses-slider').slick({
// 	slidesToShow: 4
// 	// responsive: [{
// 	// 	breakpoint: 2000,
// 	// 	settings: {
// 	// 		slidesToShow: 4,
// 	// 		infinite: true
// 	// 	}
// 	// }]
// });

const $courseItem = $('.js-course-item');

if ($(window).width() > 767 && $(window).width() < 1280){
	const maxHeight = Math.max.apply(null, Array.from($courseItem.map((ind, el) => $(el).outerHeight())));
	$courseItem.css('height', maxHeight + 'px');
}

$(window).on('resize', () => {

	const windowWidth = $(window).width();
	console.log(windowWidth);
	if (windowWidth > 767 && windowWidth < 1280){
		const maxHeight = Math.max.apply(null, Array.from($courseItem.map((ind, el) => $(el).outerHeight())));
		$courseItem.css('height', maxHeight + 'px');
	}else {
		$courseItem.css('height', '100%');
	}
});
