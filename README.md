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
const { hours, minutes } = require('mezur/time')
hours(3).inDays() // 0.125
minutes(60).inHours() // 1
```

Also possible is `.asHours()` or `.toHours()`

same for

```javascript
require('mezur/angles')
require('mezur/area')
require('mezur/mass')
require('mezur/length')
require('mezur/pressure')
require('mezur/time')
```

# There are other unit conversion packages, what gives?

Some of the other packages only give you partial conversions (i.e. minutes to seconds) without anything else.
Some are great, but are not complete, so you need several packages to "collect the whole set"
Some are more "complete" but without an easy way to add more units.

Building this is with intent to provide as much flexibility and extendability as possibly while keeping
an easy-on-the-eyes usage, since you want to an easy and reliable API when converting, so it won't get in the way
of your other important code. I believe that `hours(5).inSeconds()` do just that (to as much as javascript can give)
# Supported Conversions
## Acceleration 

|name|symbol|value|
|----|----|----|
|centigal|cgal|0.0001mpsps|
|centigalileo|cgali|0.0001mpsps|
|centimeterPerSecPerSec|cmpsps|0.01mpsps|
|feetPerHourPerHour|ftphph|0.00000002351852mpsps|
|feetPerHourPerMin|fphpmin|0.000001411mpsps|
|feetPerHourSec|fphps|0.000084667mpsps|
|feetPerMinPerMin|ftpmpm|0.000084667mpsps|
|feetPerMinutePerSec|fpmps|0.00508mpsps|
|feetPerSecPerSec|ftpsps|0.3048mpsps|
|gUnits|gu|9.80665mpsps|
|gal|gal|0.01mpsps|
|galileo|gali|0.01mpsps|
|gravity|g|9.80665mpsps|
|inchPerHourPerHour|inphph|0.000000001959877mpsps|
|inchPerHourPerMin|iphpm|0.0000001175926mpsps|
|inchPerHourPerSecond|iphps|0.000007055556mpsps|
|inchPerMinPerMin|inpmpm|0.000007055556mpsps|
|inchPerMinPerSec|ipmps|0.000423333mpsps|
|inchPerSecPerSec|inpsps|0.0254mpsps|
|kilogal|kgal|10mpsps|
|kilogalileo|kgali|10mpsps|
|kilometerPerSecPerSec|kmpsps|1000mpsps|
|knotsPerHour|knphph|0.0001429012mpsps|
|knotsPerMillisec|knpmspms|514.444444444444mpsps|
|knotsPerMin|knpmpm|0.00857407407407407mpsps|
|knotsPerSec|knpsps|0.514444444444444mpsps|
|metersPerHourPerHour|mphph|0.00000007716049mpsps|
|metersPerMinPerMin|mpmpm|0.000277778mpsps|
|metersPerSecPer/sec|mpsps|1|
|milePerHourPerHour|miphph|0.000124178mpsps|
|milesPerMinPerMin|mipmpm|0.44704mpsps|
|milesPerSecPerSec|mipsps|1609.344mpsps|
|milligal|mgal|0.00001mpsps|
|milligalileo |mgali|0.00001mpsps|
|millimeterPerSecPerSec|mmpsps|0.001mpsps|


## Angles 

|name|symbol|value|
|----|----|----|
|arcMinute|arcmin|1deg / 60|
|arcSecond|arcsec|1deg / 3600|
|degree|deg|1|
|gradian|grad|0.9deg|
|hourAngle|hrang|15deg|
|milliradian|mrad|0.001rad|
|quadrant|qd|90deg|
|radian|rad|1deg * 180/3.141592653589793|
|sextant|sxt|60deg|
|turn|tr|360deg|


## Area 

|name|symbol|value|
|----|----|----|
|acre|acre|4046.856430051sqm|
|are|a|100sqm|
|cent|cn|40.468564301sqm|
|centiare|ca|0.1sqm|
|decare|daa|100sqm|
|deciare|da|10sqm|
|hectare|ha|10000|
|squareFeet|sqft|0.092903035sqm|
|squareInch|sqin|0.00064516sqm|
|squareKilometer|sqkm|1000000sqm|
|squareMeter|sqm|1|
|squareYard|sqy|.836127392sqm|


## Length 

|name|symbol|value|
|----|----|----|
|centimeter|cm|0.01m|
|feet|ft|12in|
|inch|in|0.0254m|
|kilometer|km|1000m|
|meter|m|1|
|micrometer|mcm|0.001mm|
|mile|ml|1.609344km|
|millimeter|mm|0.01cm|
|nanometer|nm|0.001mcm|
|nauticalMile|nml|1.852km|
|yard|yard|0.9144m|


## Mass 

|name|symbol|value|
|----|----|----|
|carat|ct|0.2g|
|grain|gr|0.06479891g|
|gram|g|1|
|imperialTon|impT|1016.05kg|
|jin|jin|0.002g|
|kilogram|kg|1000g|
|microgram|mcg|0.000001g|
|milligram|mg|0.001g|
|ounce|oz|28.349523125g|
|pound|lb|453.59237g|
|stone|st|6.35029318kg|
|ton|T|1000000g|
|usTon|usT|907.18474kg|


## Pressure 

|name|symbol|value|
|----|----|----|
|atmosphere|atm|1.01325000bar|
|bar|bar|1|
|pascal|pas|0.00001bar|
|psi|psi|0.06894757293bar|
|torr|tr|0.001333223684bar|


## Time 

|name|symbol|value|
|----|----|----|
|century|C|10D|
|day|d|24h|
|decade|D|10Y|
|gigasecond|Gs|31Y + 287d|
|hectosecond|hs|1m + 40s|
|hour|h|60m|
|killosecond|ks|16m + 40s|
|megasecond|Ms|11d + 13h + 46m + 40s|
|millisecond|ms|0.001s|
|minute|m|60s|
|month|M|31d|
|second|s|1|
|terasecond|Ts|31600Y|
|week|w|7d|
|year|Y|365d|



## Development setup

```sh
yarn install
yarn test
```

## How to extend Mezur?

Let's say you now landed on Mars, and obviously everything is in javascript because only hipsters live on Mars.

```javascript
const marsUnits = [
  {
    name: 'martianDay', // or sol
    symbol: 'marsd',
    value: '24h + 39m + 35.244s'
  },
  {
    name: 'martianYear',
    symbol: 'marsY',
    value: '668.5991marsd'
  }
]

const timeUnits = require('./units/time.json') // note that angles is a js file, so PI calculates will be accurate

const marsTime = require('mezur')(timeUnits.concat(marsUnits))

marsTime.martianYears(1).inMartianDays() // 668.5991
marsTime.martianYears(1).inSeconds() // 59355048.240680404
```

## Release History

see changelog.md

## Meta

Guy Israeli – [@isguyra](https://twitter.com/isguyra)

Distributed under the MIT license. See `LICENSE` for more information.

[https://github.com/guyisra/mezur](https://github.com/guyisra/mezur)

## Contributing

1.  Fork it (<https://github.com/guyisra/mezur>)
2.  Create your feature branch (`git checkout -b feature/fooBar`)
3.  Commit your changes (`git commit -am 'Add some fooBar'`)
4.  Push to the branch (`git push origin feature/fooBar`)
5.  Create a new Pull Request

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/mezur.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mezur
[npm-downloads]: https://img.shields.io/npm/dm/mezur.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/guyisra/mezur/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/guyisra/mezur
