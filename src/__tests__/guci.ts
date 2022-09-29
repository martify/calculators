import { calculateGUCI } from "../guci"

test.each`
    asat  | reference |  pk  |  tpk  | expected
    ${0.8}  ${1.5}      ${1}    ${18}  ${2.96}
    ${0.2}  ${0.6}      ${0.5}  ${29}  ${0.57}
`('It should return the expected values', ({asat, reference, pk, tpk, expected}) => {
    expect(calculateGUCI(asat, reference, pk, tpk)).toEqual(expected)
})