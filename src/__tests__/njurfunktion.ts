import {Gender, getCreatininClearance} from '../njurfunktion'

test.each`
  age   | kreatinin | gender           | expected
  ${89} | ${120}    | ${Gender.Female} | ${31}
  ${30} | ${120}    | ${Gender.Female} | ${48}
  ${89} | ${60}     | ${Gender.Female} | ${63}
  ${89} | ${120}    | ${Gender.Male}   | ${40}
  ${89} | ${60}     | ${Gender.Male}   | ${72}
  ${89} | ${300}    | ${Gender.Female} | ${11}
  ${89} | ${300}    | ${Gender.Male}   | ${14}
  ${30} | ${300}    | ${Gender.Female} | ${18}
  ${30} | ${300}    | ${Gender.Male}   | ${22}
`(
  'it should return correct clearance',
  ({age, kreatinin, gender, expected}) => {
    expect(getCreatininClearance(age, kreatinin, gender)).toEqual(expected)
  },
)

test('it should throw if micromole is too high', () => {
  expect(() => {
    getCreatininClearance(89, 2000000, 1)
  }).toThrow('Invalid kreatinin for Kreatinin Clearance')
})

test('it should throw if micromole is too low', () => {
  expect(() => {
    getCreatininClearance(89, 5, 1)
  }).toThrow('Invalid kreatinin for Kreatinin Clearance')
})

test('it should throw if age is negative', () => {
  expect(() => {
    getCreatininClearance(-89, 100, 1)
  }).toThrow('Invalid age for Kreatinin Clearance')
})

test('it should throw if gender is not a valid number', () => {
  expect(() => {
    getCreatininClearance(89, 100, 4)
  }).toThrow('Unhandled combination in Kreatinin Clearance')
})
