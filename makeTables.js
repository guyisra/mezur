const fs = require('fs')
const j2md = require('json-to-markdown')
const capitalize = require('capitalize')

let tables = ''

files = fs.readdirSync('./units')
files.forEach(file => {
  const units = require('./units/' + file).sort(function(a, b) {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })
  tables = tables + `## ${capitalize(file.split('.')[0])} \n\n`
  tables = tables + j2md(units, ["name", "symbol", "value"])
  tables = tables + '\n\n'
})

let readme = fs.readFileSync('./README.md').toString()
readme = readme.replace(
  new RegExp('(# Supported Conversions)([\\S\\s]*?)(## D)'),
  `$1\n${tables}\n$3`
)

fs.writeFileSync('./README.md', readme)
