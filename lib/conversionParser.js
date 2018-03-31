const stringMath = require('string-math')

module.exports = timeUnits => {
  const normalize = expr => {
    timeUnits.forEach(element => {
      expr = expr.replace(new RegExp(`(\\d?[^\\D])(${element.symbol})\\s?`, 'g'), `$1 * (${element.value})`)
    })

    return expr.replace(/s/g, '')
  }

  return conversionValue => {
    let expr = conversionValue
    while (expr.match(/[a-z]/i)) {
      expr = normalize(expr)
    }

    return stringMath(expr)
  }
}
