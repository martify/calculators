import { getDosage } from "../dosEfterYta"

test.each`
    height | weight | dosage | formula | expected
    ${180}   ${75}    ${14}    ${1}      ${27.16}
    ${197}   ${104}   ${25}    ${2}      ${59.75}
    ${166}   ${62}    ${34}    ${0}      ${57.46}
`('It should return the expected values', ({height, weight, dosage, formula, expected}) => {
    expect(getDosage(height, weight, dosage, formula)).toEqual(expected)
})

test('It should throw error if invalid height', () => {
    expect(() => {
        getDosage(1000, 64, 64, 1)
    }).toThrow('Invalid height for dosage')
})

test('It should throw error if invalid weight', () => {
    expect(() => {
        getDosage(170, 10000, 45, 0)
    }).toThrow('Invalid weight for dosage')
})