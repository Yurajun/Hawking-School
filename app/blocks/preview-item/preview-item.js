/* global $ */

const $img = $('.js-picture-img');
const maxWidth = Math.max.apply(null, Array.from($img.map((ind, el) => $(el).width())));
$img.css('width', maxWidth + 'px');
