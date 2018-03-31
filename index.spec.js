const time = require('./time')

describe('mezur/time', () => {
  it('converts from milliseconds to seconds', () => {
    expect(time.milliseconds(1000).inSeconds()).toEqual(1)
  })

  it('converts from milliseconds to minutes', () => {
    expect(time.milliseconds(60000).inMinutes()).toEqual(1)
  })

  it('converts from seconds to seconds', () => {
    expect(time.seconds(10).inSeconds()).toEqual(10)
  })

  it('converts from minutes to seconds', () => {
    expect(time.minutes(10).inSeconds()).toEqual(600)
  })

  it('converts from hectosecond to seconds', () => {
    expect(time.hectoseconds(1).inSeconds()).toEqual(100)
  })
  it('converts from killsecond to seconds', () => {
    expect(time.killoseconds(1).inSeconds()).toEqual(1000)
  })
  it('converts from gigaseconds to seconds', () => {
    expect(time.gigaseconds(1).inSeconds()).toEqual(1002412800)
  })
  it('converts from terasecond to seconds', () => {
    expect(time.teraseconds(1).inSeconds()).toEqual(996537600000)
  })

  it('converts from hours to seconds', () => {
    expect(time.hours(10).inSeconds()).toEqual(36000)
  })

  it('converts from days to seconds', () => {
    expect(time.days(1).inSeconds()).toEqual(86400)
  })

  it('converts from weeks to Days', () => {
    expect(time.weeks(10).inDays()).toEqual(70)
  })
  it('converts from days to hours', () => {
    expect(time.days(1).inHours()).toEqual(24)
  })

  it('converts from months to seconds', () => {
    expect(time.months(10).inSeconds()).toEqual(26784000)
  })

  it('converts from years to seconds', () => {
    expect(time.years(1).inDays()).toEqual(365)
  })

  it('converts from decade to seconds', () => {
    expect(time.decades(10).inSeconds()).toEqual(3153600000)
  })
})
