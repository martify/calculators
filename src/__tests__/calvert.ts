import { calcCalverts } from "../calvert"

test('It should return the correct value', () => {
    const fields = {
        age: 57,
        weight: 83,
        creatine: 110,
        length: 180,
        auc: 4,
        male: true
    }
    expect(calcCalverts(fields)).toEqual(408)
})

test('It should return the correct value', () => {
    const fields = {
        age: 88,
        weight: 62,
        creatine: 155,
        length: 156,
        auc: 9,
        male: false
    }
    expect(calcCalverts(fields)).toEqual(420)
})

test('It should return the correct value', () => {
    const fields = {
        age: 12,
        weight: 43,
        creatine: 97,
        length: 137,
        auc: 6.7,
        male: true
    }
    expect(calcCalverts(fields)).toEqual(453)
})

test('It should throw error for invalid age', () => {
    const fields = {
        age: 1000,
        weight: 43,
        creatine: 97,
        length: 137,
        auc: 6.7,
        male: true
    }
    expect(() => {
        calcCalverts(fields)
    }).toThrow('Invalid age for Calverts formula')
})

test('It should throw error for invalid length', () => {
    const fields = {
        age: 12,
        weight: 43,
        creatine: 97,
        length: 1000,
        auc: 6.7,
        male: true
    }
    expect(() => {
        calcCalverts(fields)
    }).toThrow('Invalid length for Calverts formula')
})

test('It should throw error for invalid weight', () => {
    const fields = {
        age: 12,
        weight: 1000,
        creatine: 97,
        length: 137,
        auc: 6.7,
        male: true
    }
    expect(() => {
        calcCalverts(fields)
    }).toThrow('Invalid weight for Calverts formula')
})