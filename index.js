'use strict';

var table = {
	after: 1,
	before: -1
};

module.exports = function (gap) {
	gap = table[gap] || 0;

	var date = new Date();
	date.setDate(date.getDate() + gap);

	return date;
};
