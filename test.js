import test from 'ava';
import theday from './';

function compareDate(t, s) {
	return t.getDate() === s.getDate() &&
		t.getMonth() === s.getMonth() &&
		t.getYear() === s.getYear();
}

test('return today', t => {
	var td = theday();
	var c = new Date();
	t.ok(compareDate(c, td));
	t.end();
});

test('return yesterday', t => {
	var td = theday('before');
	var c = new Date();
	c.setDate(c.getDate() - 1);
	t.ok(compareDate(c, td));
	t.end();
});

test('return tomorrow', t => {
	var td = theday('after');
	var c = new Date();
	c.setDate(c.getDate() + 1);
	t.ok(compareDate(c, td));
	t.end();
});
