const utils = require('./utils')
const expect = require('expect')

it('is a sum of a plus b equals to 5', () => {
  var res = utils.add(2, 3)
  expect(res).toBe(5)
})
