# Mezur
> Converting any measuring unit to any unit

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

Sometimes you want to convert hours to seconds. Something you want to know how many
weeks are in a decade. And sometimes, you want to know how many blinks of an eye are in a day...

## Installation


```sh
npm install mezur --save
```

## Usage example

```javascript
const time = require('mezur/time')
time.hours(5).inSeconds() // 18000
time.decades(1).inWeeks() // 521.4285714285714 
```

Also exposes the timeunit methods directly

```javascript
const {hours, minutes} = require('mezur/time')
hours(3).inDays() // 0.125
minutes(60).inHours() // 1
```

same for  
```javascript
require('mezur/mass')
require('mezur/length')
require('mezur/time')
```

## Supported Time Conversions

|name|symbol|value|
|----|----|----|
|millisecond|ms|0.001s|
|hectosecond|hs|1m + 40s|
|killosecond|ks|16m + 40s|
|megasecond|Ms|11d + 13h + 46m + 40s|
|gigasecond|Gs|31Y + 287d|
|terasecond|Ts|31600Y|
|second|s|1|
|minute|m|60s|
|hour|h|60m|
|day|d|24h|
|week|w|7d|
|month|M|31d|
|year|Y|365d|
|decade|D|10Y|

## Supported Length Conversions

|name|symbol|value|
|----|----|----|
|nanometer|nm|0.000000001m|
|millimeter|mm|0.01m|
|centimeter|cm|0.01m|
|meter|m|1|
|kilometer|km|1000m|
|yard|yard|0.9144m|
|inch|in|0.0254m|

## Supported Mass Conversions

|name|symbol|value|
|----|----|----|
|gram|g|1|
|kilogram|kg|1000g|
|grain|gr|0.06479891g|
|ounce|oz|28.349523125g|
|carat|ct|0.2g|
|jin|jin|0.002g|

## Supported Angle Conversions

|name|symbol|value|
|----|----|----|
|degree|deg|1|
|radian|rad|1deg * 180/3.14159265|
|gradian|grad|0.9deg|
|milliradian|mrad|0.001rad|
|minuteOfArc|minarc|1deg / 60|
|secondOfArc|secarc|1deg / 3600|
## Development setup


```sh
yarn install 
yarn test
```

## Release History

see changelog.md

## Meta

Guy Israeli – [@isguyra](https://twitter.com/isguyra)

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/guyisra/mezur](https://github.com/guyisra/mezur)

## Contributing

1. Fork it (<https://github.com/guyisra/mezur>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/mezur.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mezur
[npm-downloads]: https://img.shields.io/npm/dm/mezur.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/guyisra/mezur/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/guyisra/mezur