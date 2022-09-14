import { calculateSyrgas } from "../syrgas"


test.each`
    size | pressure | flow | expected
    ${10}  ${6}       ${4}   ${15}
    ${4}   ${10}      ${2}   ${20}
    ${25}  ${16}      ${7}   ${57}
`('it should return correct time', ({size, pressure, flow, expected}) => {
    expect(calculateSyrgas(size, pressure, flow)).toEqual(expected)
})

test('it should throw error for invalid number', () => {
    expect(() => {
        calculateSyrgas(0, 3, 7)
    }).toThrow('Invalid number for syrgas')
})

test('it should throw error for invalid number', () => {
    expect(() => {
        calculateSyrgas(6, 0, 2)
    }).toThrow('Invalid number for syrgas')
})

test('it should throw error for invalid number', () => {
    expect(() => {
        calculateSyrgas(10, 2, 0)
    }).toThrow('Invalid number for syrgas')
})