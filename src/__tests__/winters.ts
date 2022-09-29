import { calculateWintersFormula } from "../winter"


test('It should return the correct interval', () => {
    const {floorValue, roofValue} = calculateWintersFormula(12)
    expect(floorValue).toEqual(3.19)
    expect(roofValue).toEqual(3.72)
})

test('It should return the correct interval', () => {
    const {floorValue, roofValue} = calculateWintersFormula(20)
    expect(floorValue).toEqual(4.79)
    expect(roofValue).toEqual(5.32)
})

test('It should return the correct interval', () => {
    const {floorValue, roofValue} = calculateWintersFormula(38)
    expect(floorValue).toEqual(8.38)
    expect(roofValue).toEqual(8.91)
})

test('It should throw error if invalid millimole', () => {
    expect(() => {
        calculateWintersFormula(10000)
    }).toThrow('Invalid millimole for winters formula')
})