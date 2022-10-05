import { getAIRscore } from "../airscore"

test('It should return correct score and message', () => {
    const {score, message} = getAIRscore(true, false, 1, false, 82, 12, 12)
    expect(score).toEqual(5)
    expect(message).toEqual("Intermediär sannolikhet")
})

test('It should return correct score and message', () => {
    const {score, message} = getAIRscore(false, true, 3, true, 93, 17, 62)
    expect(score).toEqual(11)
    expect(message).toEqual("Hög sannolikhet")
})

test('It should return correct score and message', () => {
    const {score, message} = getAIRscore(true, false, 0, true, 50, 8, 4)
    expect(score).toEqual(2)
    expect(message).toEqual("Låg sannolikhet")
})

test('It should throw error for incorrect percentage', () => {
    expect(() => {
        getAIRscore(false, false, 0, true, 120, 5, 15)
    }).toThrow('Invalid percentage for neurofile')
})