/* global $ */

import {maxWidth}from '../functions-js/function';

const $img = $('.js-picture-icon');

$img.css('width', maxWidth($img) + 'px');
