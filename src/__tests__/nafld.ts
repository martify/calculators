import { calcNAFLD } from "../nafld"

test('It should return the correct value', () => {
    const fields = {
        age: 57,
        bmi: 24.7, 
        ifg: false,
        asat: 4,
        plat: 110, 
        albumin: 12
    }
    expect(calcNAFLD(fields)).toEqual(4.49)
})

test('It should return the correct value', () => {
    const fields = {
        age: 88,
        bmi: 43, 
        ifg: true,
        asat: 2,
        plat: 94, 
        albumin: 26
    }
    expect(calcNAFLD(fields)).toEqual(5.79)
})

test('It should return the correct value', () => {
    const fields = {
        age: 71,
        bmi: 13, 
        ifg: true,
        asat: 1,
        plat: 132, 
        albumin: 32
    }
    expect(calcNAFLD(fields)).toEqual(0.47)
})

test('It should throw error for invalid age', () => {
    const fields = {
        age: 1000,
        bmi: 13, 
        ifg: true,
        asat: 1,
        plat: 132, 
        albumin: 32
    }
    expect(() => {
        calcNAFLD(fields)
    }).toThrow('Invalid age for NAFLD fibrosis score')
})

test('It should throw error for invalid BMI', () => {
    const fields = {
        age: 51,
        bmi: 1000, 
        ifg: true,
        asat: 1,
        plat: 132, 
        albumin: 32
    }
    expect(() => {
        calcNAFLD(fields)
    }).toThrow('Invalid BMI for NAFLD fibrosis score')
})