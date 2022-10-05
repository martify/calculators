import { getRisk } from "../hasbled"

test('It should return a score of 2', () => {
    const fields = {
        hasHypertoni: true,
        kidneyIssue: false,
        liverIssue: true,
        hadStroke: false,
        hasBled: false,
        riskPK: false,
        highAge: false,
        ASA: false,
        muchAlcohol: false  
    }
    const {score, message} = getRisk(fields)
    expect(score).toEqual(2)
    expect(message).toEqual("Lägre blödningsrisk")
})

test('It should return a score of 5', () => {
    const fields = {
        hasHypertoni: true,
        kidneyIssue: false,
        liverIssue: true,
        hadStroke: false,
        hasBled: false,
        riskPK: false,
        highAge: true,
        ASA: true,
        muchAlcohol: true  
    }
    const {score, message} = getRisk(fields)
    expect(score).toEqual(5)
    expect(message).toEqual("Hög blödningsrisk")
})