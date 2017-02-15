var attention = require('../attention')
var confirm = require('../confirm')
var log = require('../log')
var index = require('../')

it('has attention function', function () {
  expect(index.attention).toBe(attention)
})

it('has confirm function', function () {
  expect(index.confirm).toBe(confirm)
})

it('has log function', function () {
  expect(index.log).toBe(log)
})
