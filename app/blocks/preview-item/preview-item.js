/* global $ */

import {maxWidth}from '../functions-js/function';

const $img = $('.js-picture-img');

$img.css('width', maxWidth($img) + 'px');
