import { calcWaterDefic } from "../vattenunderskott"

test.each`
    sNa  |  weight  |  patient  | expected
    ${135}  ${80}      ${0}       ${-1.71}
    ${141}  ${57}      ${2}       ${0.2}
    ${144}  ${66}      ${3}       ${0.85}
`('It should return the expected result', ({sNa, weight, patient, expected}) => {
    expect(calcWaterDefic(sNa, weight, patient)).toEqual(expected)
})

test('It should throw an error for invalid weight', () => {
    expect(() => {
        calcWaterDefic(160, 1000, 2)
    }).toThrow('Invalid weight for vattenunderskott')
})