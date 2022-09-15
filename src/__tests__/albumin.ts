import { correctedCalcium } from "../albumin"

test.each`
    millimole | gram | expected
    ${30}       ${120}  ${28}
    ${95}       ${10}   ${96}
    ${10}       ${40}   ${10}
`('it should return correct calcium value', ({millimole, gram, expected}) => {
    expect(correctedCalcium(millimole, gram)).toEqual(expected)
})

test('It should throw error if invalid millimole', () => {
    expect(() => {
        correctedCalcium(-4, 10)
    }).toThrow('Invalid millimole for corrected calcium')
})

test('It should throw error if invalid gram', () => {
    expect(() => {
        correctedCalcium(10, 100000)
    }).toThrow('Invalid gram for corrected calcium')
})