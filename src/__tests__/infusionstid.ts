import {getInfusionTime} from '../infusionstid'

test.each`
  amount  | rate   | expected
  ${32}   | ${32}  | ${333}
  ${1}    | ${32}  | ${10}
  ${1}    | ${2}   | ${167}
  ${500}  | ${39}  | ${4274}
  ${39}   | ${500} | ${26}
  ${10.4} | ${33}  | ${105}
`('it should return correct infusion time', ({amount, rate, expected}) => {
  expect(getInfusionTime(amount, rate)).toEqual(expected)
})

test('it should throw if amount is too high', () => {
  expect(() => {
    getInfusionTime(10000000000, 32)
  }).toThrow('Invalid amount for Infusion Time')
})

test('it should throw if amount is too low', () => {
  expect(() => {
    getInfusionTime(0, 32)
  }).toThrow('Invalid amount for Infusion Time')
})

test('it should throw if drip rate is too high', () => {
  expect(() => {
    getInfusionTime(23, 122191299129129)
  }).toThrow('Invalid drip rate for Infusion Time')
})

test('it should throw if drip rate is too low', () => {
  expect(() => {
    getInfusionTime(23, 0)
  }).toThrow('Invalid drip rate for Infusion Time')
})
