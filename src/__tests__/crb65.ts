import { getPneumoniaScore } from "../crb65"

test('should show correct message for score = 2', () => {
    const fields = {
        newConfusion: true,
        breathFreq: false,
        hasHypotoni: false,
        age65: true
    }
    const {score, message} = getPneumoniaScore(fields)
    expect(score).toEqual(2)
    expect(message).toEqual("Sjukhusvård som regel")
})

test('should show correct message for score = 0', () => {
    const fields = {
        newConfusion: false,
        breathFreq: false,
        hasHypotoni: false,
        age65: false
    }
    const {score, message} = getPneumoniaScore(fields)
    expect(score).toEqual(0)
    expect(message).toEqual("Hembehandling lämplig")
})

test('should show correct message for score = 4', () => {
    const fields = {
        newConfusion: true,
        breathFreq: true,
        hasHypotoni: true,
        age65: true
    }
    const {score, message} = getPneumoniaScore(fields)
    expect(score).toEqual(4)
    expect(message).toEqual("Sjukhusvård, överäg IVA")
})

test('should show correct message for score = 1', () => {
    const fields = {
        newConfusion: false,
        breathFreq: false,
        hasHypotoni: false,
        age65: true
    }
    const {score, message} = getPneumoniaScore(fields)
    expect(score).toEqual(1)
    expect(message).toEqual("Sjukhusvård eller öppenvård med uppföljning")
})