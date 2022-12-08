import { getRisk } from "../graceScore"

test('It should return the expected value', () => {
    expect(getRisk(57, 70, 110, 1.2, 3, true, false, true)).toEqual({"prob": 21, "roundedScore": 151})
})

test('It should return the expected value', () => {
    expect(getRisk(70, 110, 142, 1.5, 2, false, true, true)).toEqual({"prob": 19, "roundedScore": 148})
})

test('It should return the expected value', () => {
    expect(getRisk(49, 91, 102, 0.5, 1, false, false, false)).toEqual({"prob": 1.4, "roundedScore": 67})
})

test('It should return the expected value', () => {
    expect(getRisk(84, 82, 153, 1.3, 4, true, false, false)).toEqual({"prob": 60, "roundedScore": 192})
})

test('It should return the expected value', () => {
    expect(getRisk(65, 134, 126, 0.9, 4, true, true, true)).toEqual({"prob": 70, "roundedScore": 207})
})

test('It should throw error if invalid age', () => {
    expect(() => {
        getRisk(1000, 14, 54, 1, 2, false, false, false)
    }).toThrow('Invalid age for grace score')
})

test('It should throw error if invalid age', () => {
    expect(() => {
        getRisk(50, 14, 54, 1, 2, false, false, false)
    }).toThrow('Invalid heart beat for grace score')
})