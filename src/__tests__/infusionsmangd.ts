import {getInfusion} from '../infusionsmangd'

test.each`
  hours  | rate  | expected
  ${2}   | ${25} | ${0.15}
  ${100} | ${25} | ${7.5}
  ${0}   | ${25} | ${0}
`('it should return correct infusion amount', ({hours, rate, expected}) => {
  expect(getInfusion(hours, rate)).toEqual(expected)
})
