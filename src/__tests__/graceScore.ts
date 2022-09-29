import { getRisk } from "../graceScore"

test.each`
    age | pulse | bloodPressure | creatine | killip | heartStop | stDeviation | hightenedHeart | expected
    ${57} ${70}   ${110}          ${1.2}     ${3}     ${true}     ${true}      ${false}         ${18}
`('it should return the expected value', ({age, pulse, bloodPressure, creatine, killip, heartStop, stDeviation, hightenedHeart, expected}) => {
    expect(getRisk(age, pulse, bloodPressure, creatine, killip, heartStop, stDeviation, hightenedHeart)).toEqual(expected)
})