import { getOsmolgap } from "../osmolgap"

test.each`
    sNA | sUrea | bGlukos | measuredOsm | expected
    ${50} ${32}   ${92}     ${195}        ${-31}
    ${23} ${12}   ${64}     ${123}        ${-5}
    ${13} ${8}    ${22}     ${74}         ${11}
`('it should return correct osmolgap', ({sNA, sUrea, bGlukos, measuredOsm, expected}) => {
    expect(getOsmolgap(sNA, sUrea, bGlukos, measuredOsm)).toEqual(expected)
})

test('it should throw error for incorrect millimole', () => {
    expect(() => {
        getOsmolgap(-3, 12 ,4 , 66)
    }).toThrow('Invalid millimole for osmolgap')
})

test('it should throw error for incorrect millimole', () => {
    expect(() => {
        getOsmolgap(17, 12 , 100000, 66)
    }).toThrow('Invalid millimole for osmolgap')
})