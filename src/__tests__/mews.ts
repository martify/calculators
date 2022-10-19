import { getMewsScore } from "../mews"

test('It should return expected values', () => {
    const fields = {
        breath: 14,
        pulse: 120,
        systBT: 170,
        temp: 37,
        cns: 2,
        urine: 1
    }
    expect(getMewsScore(fields)).toEqual(5)
})

test('It should return expected values', () => {
    const fields = {
        breath: 11,
        pulse: 73,
        systBT: 96,
        temp: 38.8,
        cns: 0,
        urine: 3
    }
    expect(getMewsScore(fields)).toEqual(6)
})

test('It should throw error for invalid pulse', () => {
    const fields = {
        breath: 11,
        pulse: 500,
        systBT: 96,
        temp: 38.8,
        cns: 0,
        urine: 3
    }
    expect(() => {  
        getMewsScore(fields)
    }).toThrow('Invalid pulse for MEWS')
})

test('It should throw error for invalid temperature', () => {
    const fields = {
        breath: 11,
        pulse: 68,
        systBT: 96,
        temp: 10,
        cns: 0,
        urine: 3
    }
    expect(() => {  
        getMewsScore(fields)
    }).toThrow('Invalid temperature for MEWS')
})