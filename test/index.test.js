var attention = require('../attention')
var confirm = require('../confirm')
var index = require('../')

it('has attention function', function () {
  expect(index.attention).toBe(attention)
})

it('has confirm function', function () {
  expect(index.confirm).toBe(confirm)
})
