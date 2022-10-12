import { correctedCalcium } from "../phcorrected"

test.each`
    calcium  |  pH  |  expected
    ${5}       ${6}    ${1.29}
    ${2}       ${7}    ${1.58}
    ${3}       ${8}    ${3.95}
    ${4}       ${7.4}  ${4}
`('It should return the expected values', ({calcium, pH, expected}) => {
    expect(correctedCalcium(calcium, pH)).toEqual(expected)
})