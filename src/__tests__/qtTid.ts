import { getCorrectedQTTime } from "../qtTid"


test.each`
  qtTime | frequency | allForms | expected
  ${12}    ${86}       ${false}   ${14.4}
  ${30}    ${67}       ${false}   ${31.7}
  ${22}    ${81}       ${false}   ${25.6}
`('it should return correct result for bazett only', ({qtTime, frequency, allForms, expected}) =>  {
    expect(getCorrectedQTTime(qtTime, frequency, allForms)).toEqual(expected)
})


test('it should return correct result for all forms', () => {
    const {bazett, friderica, framingham, hodges} = getCorrectedQTTime(39, 74, true)
    expect(bazett).toEqual(43.3)
    expect(friderica).toEqual(41.8)
    expect(framingham).toEqual(68.1)
    expect(hodges).toEqual(63.5)
})

test('it should throw error for incorrect heart beat', () => {
    expect(() => {
        getCorrectedQTTime(30, 500, false)
    }).toThrow('Invalid heartbeat for corrected QT-time')
})