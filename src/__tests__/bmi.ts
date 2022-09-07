import {getBMI} from '../bmi'

test.each`
  height | weight | expected
  ${170} | ${80}  | ${27.68}
  ${100} | ${80}  | ${80}
`('it should return correct bmi', ({height, weight, expected}) => {
  expect(getBMI(height, weight)).toEqual(expected)
})

test('it should throw if invalid weight', () => {
  expect(() => {
    getBMI(100, 100000000)
  }).toThrow('Invalid weight for BMI')
})

test('it should throw if invalid height', () => {
  expect(() => {
    getBMI(100000000, 100)
  }).toThrow('Invalid height for BMI')
})
