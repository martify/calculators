import {getAPRIScore} from "../apriScore"

test.each`
    ast | plateletCount | expected
    ${49}   ${332}        ${0.37}
    ${78}   ${155}        ${1.26}
    ${25}   ${210}        ${0.3}
`('It should return the expected value', ({ast, plateletCount, expected}) => {
    expect(getAPRIScore(ast, plateletCount)).toEqual(expected)
})