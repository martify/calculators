import { calcSi2NCal } from "../si2ncal"

test('It should return the correct percentages', () => {
    const fields = {
        age: 52,
        glucose: 8,
        hemoglobin: 100,
        female: true,
        hemorrhage: false,
        infection: true,
        focalDef: false,
        coma: true,
        cancer: false
    }
    const {mRSRisk, mort30, mortYear} = calcSi2NCal(fields)
    expect(mRSRisk).toEqual(34)
    expect(mort30).toEqual(11)
    expect(mortYear).toEqual(20)
})

test('It should return the correct percentages', () => {
    const fields = {
        age: 38,
        glucose: 5,
        hemoglobin: 81,
        female: false,
        hemorrhage: true,
        infection: false,
        focalDef: true,
        coma: false,
        cancer: true
    }
    const {mRSRisk, mort30, mortYear} = calcSi2NCal(fields)
    expect(mRSRisk).toEqual(34)
    expect(mort30).toEqual(9)
    expect(mortYear).toEqual(16)
})

test('It should throw error if invalid age', () => {
    const fields = {
        age: 200,
        glucose: 5,
        hemoglobin: 81,
        female: false,
        hemorrhage: true,
        infection: false,
        focalDef: true,
        coma: false,
        cancer: true
    }
    expect(() => {
        calcSi2NCal(fields)
    }).toThrow('Invalid age for Si2NCal2C')
})