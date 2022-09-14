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
    const {final_score, message, risk_perc} = calculateRisks(72, values)
    expect(final_score).toEqual(4)
    expect(message).toEqual('Waran eller NOAC')
    expect(risk_perc).toEqual(4.0)
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
    const {final_score, message, risk_perc} = calculateRisks(64, values)
    expect(final_score).toEqual(0)
    expect(message).toEqual('Ingen behandling')
    expect(risk_perc).toEqual(0)
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
    const {final_score, message, risk_perc} = calculateRisks(60, values)
    expect(final_score).toEqual(1)
    expect(message).toEqual('Waran eller NOAC (om poäng endast för kvinnligt kön rekommenderas ofta ingen behandling)')
    expect(risk_perc).toEqual(1.3)
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
    const {final_score, message, risk_perc} = calculateRisks(80, values)
    expect(final_score).toEqual(9)
    expect(message).toEqual('Waran eller NOAC')
    expect(risk_perc).toEqual(15.2)
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