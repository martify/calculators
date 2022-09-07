import {getDripRate} from '../dropptakt'

test.each`
  amount  | rate   | expected
  ${32}   | ${32}  | ${333}
  ${1}    | ${32}  | ${10}
  ${1}    | ${2}   | ${167}
  ${500}  | ${39}  | ${4274}
  ${39}   | ${500} | ${26}
  ${10.4} | ${33}  | ${105}
`('it should return correct drip rate', ({amount, rate, expected}) => {
  expect(getDripRate(amount, rate)).toEqual(expected)
})

test('it should throw if amount is too high', () => {
  expect(() => {
    getDripRate(10000000000, 32)
  }).toThrow('Invalid amount for Drip Rate')
})

test('it should throw if amount is too low', () => {
  expect(() => {
    getDripRate(0, 32)
  }).toThrow('Invalid amount for Drip Rate')
})

test('it should throw if hours is too high', () => {
  expect(() => {
    getDripRate(23, 122191299129129)
  }).toThrow('Invalid hours for Drip Rate')
})

test('it should throw if hours is too low', () => {
  expect(() => {
    getDripRate(23, 0)
  }).toThrow('Invalid hours for Drip Rate')
})
