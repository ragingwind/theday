#!/usr/bin/env node

const meow = require('meow');
const theday = require('./');

const cli = meow({
	help: [`
	Usage
	  $ theday [gab]
	Examples
	  $ theday
	  Fri Oct 16 15:34:53 KST 2015
	  $ theday before
	  Thu Oct 15 15:34:53 KST 2015
	  $ theday after
	  Thu Oct 17 15:34:53 KST 2015
		$ theday 'June 13 2016'
		Web Jun 13 2016 10:22:22 GMT+0900 (KST)
	`]
});

console.log(theday(cli.input[0]).toString());
