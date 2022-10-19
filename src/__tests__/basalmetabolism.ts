import { getBasalMetabolism } from "../basalmetabolism"

test('It should correct value', () => {
    const {basalMale, basalFemale} = getBasalMetabolism(180, 80, 25)
    expect(basalMale).toEqual(1898)
    expect(basalFemale).toEqual(1636)
})

test('It should correct value', () => {
    const {basalMale, basalFemale} = getBasalMetabolism(132, 35, 12)
    expect(basalMale).toEqual(1127)
    expect(basalFemale).toEqual(1178)
})

test('It should correct value', () => {
    const {basalMale, basalFemale} = getBasalMetabolism(174, 90, 38)
    expect(basalMale).toEqual(1918)
    expect(basalFemale).toEqual(1660)
})

test('It should throw error for invalid height', () => {
    expect(() => {
        getBasalMetabolism(1000, 64, 34)
    }).toThrow('Invalid height for basalmetabolism')
})

test('It should throw error for invalid age', () => {
    expect(() => {
        getBasalMetabolism(200, 64, 1000)
    }).toThrow('Invalid age for basalmetabolism')
})

test('It should throw error for invalid weight', () => {
    expect(() => {
        getBasalMetabolism(200, 1000, 50)
    }).toThrow('Invalid weight for basalmetabolism')
})