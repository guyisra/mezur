const capitalize = require("capitalize");

module.exports = unitTypes => {
  const conversionParser = require("./lib/conversionParser")(unitTypes);

  class MezurUnit {
    constructor(units, name) {
      this.units = units;
      this.name = name;

      unitTypes.forEach(klassTo => {
        this.constructor.prototype[
          `in${capitalize(klassTo.name)}s`
        ] = function() {
          return this._convertTo(klassTo);
        };

        this.constructor.prototype[
          `to${capitalize(klassTo.name)}s`
        ] = this.constructor.prototype[`in${capitalize(klassTo.name)}s`];

        this.constructor.prototype[`as${capitalize(klassTo.name)}s`] = this.constructor.prototype[`in${capitalize(klassTo.name)}s`];
      });
    }

    _inBaseUnit() {
      const mezuringUnit = unitTypes.filter(x => this.name === x.name)[0];
      return this.units * conversionParser(mezuringUnit.value);
    }

    _convertTo(otherUnit) {
      return (
        this._inBaseUnit() /
        conversionParser(
          unitTypes.filter(x => otherUnit.name === x.name)[0].value
        )
      );
    }
  }
  const mezuringFunctions = {};
  unitTypes.forEach(mezuringUnit => {
    const functionName = mezuringUnit.name + "s";
    mezuringFunctions[functionName] = function(units) {
      return new MezurUnit(units, mezuringUnit.name);
    };
  });

  return mezuringFunctions;
};
