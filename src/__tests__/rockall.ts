import { getRockall } from "../rockall"


test.each`
    age | komor | chock | sigmata | endo | expected
    ${60} ${0}    ${2}    ${0}      ${1}   ${4}
    ${81} ${3}    ${1}    ${2}      ${0}   ${8}
    ${55} ${2}    ${0}    ${0}      ${2}   ${4}
    ${90} ${3}    ${2}    ${2}      ${2}   ${11}
`('It should return the expected values', ({age, komor, chock, sigmata, endo , expected}) => {
    expect(getRockall(age, komor, chock, sigmata, endo)).toEqual(expected)
})

test('It should throw an error for invalid age', () => {
    expect(() => {
        getRockall(1000, 0, 2, 2, 1)
    }).toThrow('Invalid age for Rockall')
})