// import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'remodal';
import 'jquery-mask-plugin';
import 'picturefill';

// $(() => {
// 	svg4everybody();
// });

import '../../node_modules/waypoints/lib/jquery.waypoints.min.js';

$('.js-waypoint').each((ind, elem) => {
	const offset = $(elem).attr('data-offset'); // '70%';
	const cls = $(elem).attr('data-class'); // 'fadeInUp';

	$(elem).addClass('animated');

	$(elem).waypoint({
		handler() {
			$(elem).addClass(cls);
		},
		offset
	});
});

import '../blocks/main/main';
import '../blocks/nav/nav';
import '../blocks/preview-item/preview-item';
import '../blocks/info/info';
import '../blocks/courses-slider/courses-slider';
import '../blocks/page-head/page-head';
import '../blocks/remodal-form/remodal-form';
import '../blocks/map/map';


