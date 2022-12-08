import { getBlatchfordScore } from "../blatchford"

test('It should return a score of 12', () => {
    const risks = {
        melena: false,
        sight: false,
        liver: true,
        heart: false
    }

    const fields = {
        woman: true,
        bHB: 90,
        sUrea: 13, 
        systBT: 110,
        pulse: 70,
        risks: risks
    }
    expect(getBlatchfordScore(fields)).toEqual(12)

})

test('It should return a score of 13', () => {
    const risks = {
        melena: true,
        sight: true,
        liver: false,
        heart: true
    }

    const fields = {
        woman: false,
        bHB: 115,
        sUrea: 9, 
        systBT: 101,
        pulse: 132,
        risks: risks
    }
    expect(getBlatchfordScore(fields)).toEqual(13)

})

test('It should return a score of 2', () => {
    const risks = {
        melena: true,
        sight: false,
        liver: false,
        heart: false
    }

    const fields = {
        woman: true,
        bHB: 101,
        sUrea: 4, 
        systBT: 145,
        pulse: 52,
        risks: risks
    }
    expect(getBlatchfordScore(fields)).toEqual(2)

})

test('It should return a score of 23', () => {
    const risks = {
        melena: true,
        sight: true,
        liver: true,
        heart: true
    }

    const fields = {
        woman: false,
        bHB: 89,
        sUrea: 32, 
        systBT: 76,
        pulse: 120,
        risks: risks
    }
    expect(getBlatchfordScore(fields)).toEqual(23)

})