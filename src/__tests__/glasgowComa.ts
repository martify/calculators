import { calculateComaScore } from "../glasgowComa"

test.each`
    eyes | verbal | motor | expected
    ${2}   ${4}     ${4}    ${10}
    ${4}   ${2}     ${3}    ${9}
    ${1}   ${1}     ${1}    ${3}
`("It should return expected value", ({eyes, verbal, motor, expected}) => {
    expect(calculateComaScore(eyes, verbal, motor)).toEqual(expected)
})