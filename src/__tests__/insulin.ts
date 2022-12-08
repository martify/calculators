import { calculateInsulin } from "../insulin"

test.each`
    bGlukos | dailyInsulin | expected
    ${20}     ${140}         ${17}  
    ${15}     ${48}          ${3}  
    ${31}     ${67}          ${15}  
    ${48}     ${89}          ${36}  
`('It should return the expected value', ({bGlukos, dailyInsulin, expected}) => {
    expect(calculateInsulin(bGlukos, dailyInsulin)).toEqual(expected)
})

test('It should throw error if invalid glukos', () => {
    expect(() => {
        calculateInsulin(10000, 12)
    }).toThrow('Invalid amount of glucose for insulin')
})