# theday [![Build Status](https://travis-ci.org/ragingwind/theday.svg?branch=master)](https://travis-ci.org/ragingwind/theday)

> 📅 the day, after, before and someday


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

theday('June 10 2016')
// => Fri Jun 10 2016 00:00:00 GMT+0900 (KST)
```

## API

### theday(option)

#### option

Type: `string`

a gap from today or specific day you want know full datetime

## CLI

```
$ theday --help
```

## License

MIT © [JImmy Moon](http://ragingwind.me)
