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
	t.true(compareDate(c, td));
});

test('return yesterday', t => {
	var td = theday('before');
	var c = new Date();
	c.setDate(c.getDate() - 1);
	t.true(compareDate(c, td));
});

test('return tomorrow', t => {
	var td = theday('after');
	var c = new Date();
	c.setDate(c.getDate() + 1);
	t.true(compareDate(c, td));
});

test('return theday', t => {
	var td = theday('Jun 10 2016');
	t.is(td.getDay(), 5);
	t.true(compareDate(new Date('Jun 10 2016'), td));
});
