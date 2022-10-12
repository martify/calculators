export type Hasbled = {
    hasHypertoni: boolean,
    kidneyIssue: boolean,
    liverIssue: boolean,
    hadStroke: boolean,
    hasBled: boolean,
    riskPK: boolean,
    highAge: boolean,
    ASA: boolean,
    muchAlcohol: boolean
}

function scoreToText(score: number) {
    if (score < 3) {
        return "Lägre blödningsrisk"
    }
    return "Hög blödningsrisk"
}

function getRisk(fields: Hasbled) {
    const score = Object.values(fields).reduce((sum, isRisk) => (isRisk ? sum + 1: sum), 0)
    const message = scoreToText(score)
    return {score, message}
}

export {getRisk}