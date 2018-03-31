const folder = process.argv[2]

const j2md = require('json-to-markdown')
const units =require(`./${folder}/units`)

console.log(j2md(units, Object.keys(units[0])))
