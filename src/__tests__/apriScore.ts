import {getAPRIScore} from "../apriScore"

test.each`
    asat |  tpk  |  male  | expected
    ${49}  ${332}   ${true}  ${19.7}
    ${78}  ${155}   ${false} ${83.9}
    ${25}  ${210}   ${true}  ${15.9}
`('It should return the expected value', ({asat, tpk, male, expected}) => {
    expect(getAPRIScore(asat, tpk, male)).toEqual(expected)
})