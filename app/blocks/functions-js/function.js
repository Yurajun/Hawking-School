/* global $ */

const maxWidth = arrElements => Math.max.apply(null, Array.from(arrElements.map((ind, el) => $(el).width())));

export {maxWidth};
