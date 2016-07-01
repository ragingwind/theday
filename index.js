const Table = {
	after: 1,
	before: -1
};

module.exports = function (opts) {
	var date = new Date();
	if (opts) {
		const gap = Table[opts];
		if (gap) {
			date.setDate(date.getDate() + gap);
		} else {
			try {
				date = new Date(opts);
			} catch (err) {
				date = undefined;
			}
		}
	}

	return date;
};
