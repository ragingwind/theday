# theday [![Build Status](https://travis-ci.org/ragingwind/theday.svg?branch=master)](https://travis-ci.org/ragingwind/theday)

> the day, after, before


## Install

```
$ npm install --save theday
```


## Usage

```js
var theday = require('theday');

theday();
//=> Fri Oct 16 15:34:53 KST 2015

theday('before');
//=> Thu Oct 15 15:34:53 KST 2015

theday('after');
//=> Thu Oct 15 15:34:53 KST 2015
```

## API

### theday(gap)

#### gap

Type: `string`

a gap from today

## CLI

```
$ npm install --global theday
```

```
$ theday --help

  Usage
    theday [gab]

  Examples
    $ theday
		Fri Oct 16 15:34:53 KST 2015
		$ theday before
		Thu Oct 15 15:34:53 KST 2015
		$ theday after
		Thu Oct 15 15:34:53 KST 2015
```

## License

MIT © [JImmy Moon](http://ragingwind.me)
