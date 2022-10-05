type Hasbled = {
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

function calculateScore(fields: Hasbled): number {
    let score = 0
    Object.values(fields).forEach(value => {
        if (value) score++
    })
    return score
}

function scoreToText(score: number) {
    if (score < 3) {
        return "Lägre blödningsrisk"
    }
    return "Hög blödningsrisk"
}

function getRisk(fields: Hasbled) {
    const score = calculateScore(fields)
    const message = scoreToText(score)
    return {score, message}
}

export {getRisk}