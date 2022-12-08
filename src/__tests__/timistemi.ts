import { getTIMIStemi } from "../timistemi"

test('It should return correct value for score and mortality', () => {
    const fields = {
        diabetes: true,
        hypertoni: false,
        anginaPectoris: false,
        killipTwo: false,
        highST: false,
        longTime: false
    }
    const {score, mortality} = getTIMIStemi(67, 110, 76, 55, fields)
    expect(score).toEqual(4)
    expect(mortality).toEqual(7.3)
})

test('It should return correct value for score and mortality', () => {
    const fields = {
        diabetes: false,
        hypertoni: false,
        anginaPectoris: false,
        killipTwo: true,
        highST: false,
        longTime: false
    }
    const {score, mortality} = getTIMIStemi(82, 80, 150, 80, fields)
    expect(score).toEqual(10)
    expect(mortality).toEqual(35.9)
})

test('It should return correct value for score and mortality', () => {
    const fields = {
        diabetes: false,
        hypertoni: false,
        anginaPectoris: true,
        killipTwo: false,
        highST: false,
        longTime: true
    }
    const {score, mortality} = getTIMIStemi(49, 100, 84, 77, fields)
    expect(score).toEqual(2)
    expect(mortality).toEqual(2.2)
})

test('It should return correct value for score and mortality', () => {
    const fields = {
        diabetes: false,
        hypertoni: false,
        anginaPectoris: false,
        killipTwo: true,
        highST: false,
        longTime: true
    }
    const {score, mortality} = getTIMIStemi(71, 90, 84, 77, fields)
    expect(score).toEqual(8)
    expect(mortality).toEqual(26.8)
})

test('It should return correct value for score and mortality', () => {
    const fields = {
        diabetes: false,
        hypertoni: true,
        anginaPectoris: false,
        killipTwo: true,
        highST: false,
        longTime: true
    }
    const {score, mortality} = getTIMIStemi(62, 90, 84, 77, fields)
    expect(score).toEqual(7)
    expect(mortality).toEqual(23.4)
})

test('It should throw error if invalid age', () => {
    const fields = {
        diabetes: false,
        hypertoni: false,
        anginaPectoris: false,
        killipTwo: true,
        highST: false,
        longTime: true
    }
    expect(() => {
        getTIMIStemi(1242, 53, 66, 63, fields)
    }).toThrow('Invalid age for TIMI-score STEMI')
})

test('It should throw error if invalid age', () => {
    const fields = {
        diabetes: false,
        hypertoni: false,
        anginaPectoris: false,
        killipTwo: true,
        highST: false,
        longTime: true
    }
    expect(() => {
        getTIMIStemi(97, 53, 66, 10000, fields)
    }).toThrow('Invalid weight for TIMI-score STEMI')
})