
const capitalize = require('capitalize')

module.exports = unitTypes => {
  const conversionParser = require('./lib/conversionParser')(unitTypes)

  class MezurUnit {
    constructor(units, name) {
      this.units = units
      this.name = name

      unitTypes.forEach(klassTo => {
        if (klassTo.base) {
          return
        }
        this.constructor.prototype[`in${capitalize(klassTo.name)}s`] = function() {
          return this.convertTo(klassTo)
        }
      })
    }

    inSeconds() {
      const mezuringUnit = unitTypes.filter(x => this.name === x.name)[0]
      return this.units * conversionParser(mezuringUnit.value)
    }

    convertTo(otherUnit) {
      return (
        this.inSeconds() /
        conversionParser(unitTypes.filter(x => otherUnit.name === x.name)[0].value)
      )
    }
  }
  const mezuringFunctions = {}
  unitTypes.forEach(mezuringUnit => {
    const functionName = mezuringUnit.name + 's'
    mezuringFunctions[functionName] = function(units) {
      return new MezurUnit(units, mezuringUnit.name)
    }
  })

  return mezuringFunctions
}
