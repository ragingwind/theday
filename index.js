const Table = {
	after: 1,
	before: -1
};

module.exports = function (opts) {
	let date = new Date();

	if (opts) {
		const gap = Table[opts];
		if (gap) {
			date.setDate(date.getDate() + gap);
		} else {
			try {
				const prev = new Date(opts);
				date.setDate(prev.getDate());
			} catch (err) {
				date = undefined;
			}
		}
	}

	return date;
};
