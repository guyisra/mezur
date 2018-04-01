const conversionParserCreator = require('./conversionParser')

describe('conversionParser', () => {
  it('converts a single value', () => {
    const units = [
      {
        name: 'second',
        symbol: 's',
        value: '1'
      }
    ]

    const conversionParser = conversionParserCreator(units)
    expect(conversionParser('30s')).toEqual(30)
  })

  it('calculates a simple conversion of values', () => {
    const units = [
      { name: 'second', symbol: 's', value: '1' },
      { name: 'minute', symbol: 'm', value: '60s' }
    ]

    const conversionParser = conversionParserCreator(units)

    expect(conversionParser('1m')).toEqual(60)
  })

  it('calculates an series of conversions of values', () => {
    const units = [
      { name: 'second', symbol: 's', value: '1' },
      { name: 'minute', symbol: 'm', value: '60s' },
      { name: 'hour', symbol: 'h', value: '60m' }
    ]

    const conversionParser = conversionParserCreator(units)

    expect(conversionParser('3h')).toEqual(10800)
  })

  it('calculates a conversions with addition of values', () => {
    const units = [
      { name: 'second', symbol: 's', value: '1' },
      { name: 'minute', symbol: 'm', value: '60s' },
      { name: 'gour', symbol: 'g', value: '25m' },
      { name: 'plex', symbol: 'P', value: '60m + 30s * 5g' }
    ]

    const conversionParser = conversionParserCreator(units)

    expect(conversionParser('7.5P')).toEqual(1714500)
  })

  it('converts the calculation using the correct symbols', () => {
    const units = [
      { name: 'second', symbol: 's', value: '1' },
      { name: 'minute', symbol: 'm', value: '60s' },
      { name: 'sm', symbol: 'sm', value: '1000' },
      { name: 'smsm', symbol: 'smsm', value: '9999' },
    ]

    const conversionParser = conversionParserCreator(units)

    expect(conversionParser('1sm')).toEqual(1000)
    expect(conversionParser('1smsm')).toEqual(9999)
  })
})
