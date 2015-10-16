'use strict';
module.exports = function (gap) {
	switch (gap) {
		case 'after':
			gap = 1;
			break;
		case 'before':
			gap = -1;
			break;
		default:
			gap = 0;
	}

	var date = new Date();
	date.setDate(date.getDate() + gap);

	return date;
};
