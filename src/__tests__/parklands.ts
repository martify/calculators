import { calcParklands } from "../parklands"

test.each`
    weight | perc | expected
    ${80}    ${6}   ${1920}
    ${62}    ${22}  ${5456}
    ${117}   ${39}  ${18252}
`('It should return the expected value', ({weight, perc, expected}) => {
    expect(calcParklands(weight, perc)).toEqual(expected)
})

test('It should throw error for invalid weight', () => {
    expect(() => {
        calcParklands(1000, 64)
    }).toThrow('Invalid weight for Parklands formula')
})

test('It should throw error for invalid percentage', () => {
    expect(() => {
        calcParklands(80, 1000)
    }).toThrow('Invalid percentage for Parklands formula')
})