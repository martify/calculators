import { getScore } from "../score2"

test.each`
    age | systBT | cholesterol | hdl | smoker | male | expected
    ${42} ${107}   ${155}       ${151} ${true}  ${true}  ${4}
    ${53} ${113}   ${234}       ${229} ${false} ${false} ${2}
    ${68} ${179}   ${250}       ${244} ${false} ${true}  ${18}
    ${77} ${144}   ${204}       ${201} ${true}  ${false} ${24}
    ${83} ${123}   ${180}       ${178} ${false} ${true}  ${25}
`('It should return the expected value', ({age, systBT, cholesterol, hdl, smoker, male, expected}) => {
    expect(getScore(age, systBT, cholesterol, hdl, smoker, male)).toEqual(expected)
})

test('It should throw error if invalid age', () => {
    expect(() => {
        getScore(1000, 4, 53, 66, true, true)
    }).toThrow('Invalid age for Score2')
})