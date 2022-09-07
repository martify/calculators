import {getAnjongap} from '../anjongap'

test.each`
  na         | k     | ci    | hco3  | expected
  ${1}       | ${1}  | ${1}  | ${1}  | ${0}
  ${10}      | ${20} | ${30} | ${40} | ${-40}
  ${10.3399} | ${1}  | ${1}  | ${1}  | ${9.3399}
`('it should return correct anjongab', ({na, k, ci, hco3, expected}) => {
  expect(getAnjongap(na, k, ci, hco3)).toEqual(expected)
})

test('it should allow maximum ten decimal places and round', () => {
  expect(getAnjongap(1.5555555555999, 10, 1, 1)).toEqual(9.5555555556)
  expect(getAnjongap(1.9999999999999, 10, 1, 1)).toEqual(10)
})

test('it should throw if negative na', () => {
  expect(() => {
    getAnjongap(-20, 1, 1, 1)
  }).toThrow('Invalid millimole for anjongap')
})

test('it should throw if na is zero', () => {
  expect(() => {
    getAnjongap(0, 1, 1, 1)
  }).toThrow('Invalid millimole for anjongap')
})
