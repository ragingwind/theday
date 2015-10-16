#!/usr/bin/env node
'use strict';
var meow = require('meow');
var theday = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ theday [gab]',
		'',
		'Examples',
		'  $ theday',
		'  Fri Oct 16 15:34:53 KST 2015',
		'  $ theday before',
		'  Thu Oct 15 15:34:53 KST 2015',
		'  $ theday after',
		'  Thu Oct 17 15:34:53 KST 2015'
	]
});

console.log(theday(cli.input[0]).toString());
