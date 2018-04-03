const fs= require('fs')
const capitalize = require('capitalize')
require('./postinstall')

files = fs.readdirSync('./units')
files.forEach(file => {
  // file = "length.json"
  describe(`mezur/${file}`, () => {
    const units = require('./units/' + file)
    const mezuringScope = require('./' + file.split('.')[0])
    units.map(u1 => {
      units.map(u2 => {
        it(`converts from 1 ${u1.name} to ${u2.name}, "in" method`, () => {
          expect(mezuringScope[u1.name + 's'](1)[`in${capitalize(u2.name + 's')}`]()).toMatchSnapshot()
        })
        it(`converts from 1 ${u1.name} to ${u2.name}, "as" method`, () => {
          expect(mezuringScope[u1.name + 's'](1)[`as${capitalize(u2.name + 's')}`]()).toMatchSnapshot()
        })
        it(`converts from 1 ${u1.name} to ${u2.name}, "to" method`, () => {
          expect(mezuringScope[u1.name + 's'](1)[`to${capitalize(u2.name + 's')}`]()).toMatchSnapshot()
        })
      })
    })
  })
})

describe('extend units', () => {
  it('uses the new time units', () => {
    const marsUnits = [
      { name: 'martianDay', symbol: 'marsd', value: '24h + 39m + 35.244s' },
      { name: 'martianYear', symbol: 'marsY', value: '668.5991marsd' }
    ]

    const timeUnits = require('./units/time.json') // note that angles is a js file, so PI calculates will be accurate

    const marsTime = require('.')(timeUnits.concat(marsUnits))

    expect(marsTime.martianYears(1).inMartianDays()).toEqual(668.5991)
    expect(marsTime.martianYears(1).inSeconds()).toEqual(59355048.240680404)
  })
})
