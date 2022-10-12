import { calculateBodySize } from '../kroppsyta'

test.each`
    height | weight | expected
    ${160}   ${55}    ${1.56}
    ${195}   ${110}   ${2.42}
    ${180}   ${80}    ${2}
`("It should return the correct body size", ({height, weight, expected}) => {
    expect(calculateBodySize(height, weight)).toEqual(expected)
}) 

test('It should throw error for invalid height', () => {
    expect(() => {
        calculateBodySize(100000, 60)
    }).toThrow('Invalid height for body size')
})

test('It should throw error for invalid weight', () => {
    expect(() => {
        calculateBodySize(180, 111111)
    }).toThrow('Invalid weight for body size')
})