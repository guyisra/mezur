const stringMath = require('string-math')

module.exports = timeUnits => {
  const normalize = expr => {
    timeUnits.forEach(element => {
      expr = expr.replace(
        new RegExp(`(\\d?[^\\D])(${element.symbol})(?![a-zA-Z])\\s?`, 'g'),
        `$1 * (${element.value})`
      )
    })

    return expr
  }

  return conversionValue => {
    let expr = conversionValue
    while (expr.match(/[a-z]/i)) {
      expr = normalize(expr)
    }

    return stringMath(expr)
  }
}
