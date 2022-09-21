import { calculateRisks } from "../chadsvasc";

test("score = 4", () => {
    const values = {
        hasHeartFail: false,
        hasHyper: false,
        hasStroke: true,
        hasDiabetes: false,
        hasVascular: false,
        isWoman: true
    }
    const {finalScore, message, riskPerc} = calculateRisks(72, values)
    expect(finalScore).toEqual(4)
    expect(message).toEqual('Waran eller NOAC')
    expect(riskPerc).toEqual(4.0)
} )

test("score = 0", () => {
    const values = {
        hasHeartFail: false,
        hasHyper: false,
        hasStroke: false,
        hasDiabetes: false,
        hasVascular: false,
        isWoman: false
    }
    const {finalScore, message, riskPerc} = calculateRisks(64, values)
    expect(finalScore).toEqual(0)
    expect(message).toEqual('Ingen behandling')
    expect(riskPerc).toEqual(0)
} )

test("only 'is woman' ", () => {
    const values = {
        hasHeartFail: false,
        hasHyper: false,
        hasStroke: false,
        hasDiabetes: false,
        hasVascular: false,
        isWoman: true
    }
    const {finalScore, message, riskPerc} = calculateRisks(60, values)
    expect(finalScore).toEqual(1)
    expect(message).toEqual('Waran eller NOAC (om poäng endast för kvinnligt kön rekommenderas ofta ingen behandling)')
    expect(riskPerc).toEqual(1.3)
} )

test("score = 9", () => {
    const values = {
        hasHeartFail: true,
        hasHyper: true,
        hasStroke: true,
        hasDiabetes: true,
        hasVascular: true,
        isWoman: true
    }
    const {finalScore, message, riskPerc} = calculateRisks(80, values)
    expect(finalScore).toEqual(9)
    expect(message).toEqual('Waran eller NOAC')
    expect(riskPerc).toEqual(15.2)
} )

test('it should throw if too high age', () => {
    const values = {
        hasHeartFail: false,
        hasHyper: false,
        hasStroke: false,
        hasDiabetes: false,
        hasVascular: false,
        isWoman: true
    }
    expect(() => {
        calculateRisks(200, values)
    }).toThrow("Invalid age")
})