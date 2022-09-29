import { calculatePESI } from "../pesiScore"

test('It should return correct score and mortality percentage', () => {
    const fields = {
        isMale: true,
        hasCancer: false,
        heartFailure: false,
        chronicLung: true,
        highPulse: false,
        systolicBT: false,
        breathFreq: false,
        lowTemp: true,
        mentalIssue: false,
        lowOxygen: false
    }
    const {score, percentage} = calculatePESI(55, fields)
    expect(score).toEqual(95)
    expect(percentage).toEqual("3,2-7,1%")
})

test('It should return correct score and mortality percentage', () => {
    const fields = {
        isMale: false,
        hasCancer: false,
        heartFailure: true,
        chronicLung: true,
        highPulse: false,
        systolicBT: true,
        breathFreq: false,
        lowTemp: false,
        mentalIssue: false,
        lowOxygen: false
    }
    const {score, percentage} = calculatePESI(23, fields)
    expect(score).toEqual(73)
    expect(percentage).toEqual("1,7-3,5%")
})

test('It should return correct score and mortality percentage', () => {
    const fields = {
        isMale: false,
        hasCancer: true,
        heartFailure: false,
        chronicLung: false,
        highPulse: false,
        systolicBT: false,
        breathFreq: true,
        lowTemp: false,
        mentalIssue: true,
        lowOxygen: false
    }
    const {score, percentage} = calculatePESI(78, fields)
    expect(score).toEqual(188)
    expect(percentage).toEqual("10,0-24,5%")
})

test('It should throw an error for invalid age', () => {
    expect(() => {
        const fields = {
            isMale: false,
            hasCancer: true,
            heartFailure: false,
            chronicLung: false,
            highPulse: false,
            systolicBT: false,
            breathFreq: true,
            lowTemp: false,
            mentalIssue: true,
            lowOxygen: false
        }
        calculatePESI(1000, fields)
    }).toThrow('Invalid age for PESI-score')
})