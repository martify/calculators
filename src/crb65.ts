type Symptomes = {
    newConfusion: boolean,
    breathFreq: boolean,
    hasHypotoni: boolean,
    age65: boolean
}

function scoreToText(score) {
    if (score >= 3) {
        return "Sjukhusvård, överäg IVA"
    }
    else if (score === 2) {
        return "Sjukhusvård som regel"
    }
    else if (score === 1) {
        return "Sjukhusvård eller öppenvård med uppföljning"
    }
    else {
        return "Hembehandling lämplig"
    }
}

function getPneumoniaScore(fields: Symptomes) {
    const score = Object.values(fields).reduce((sum, risk) => (risk ? sum + 1: sum), 0)
    const message = scoreToText(score)
    return {score, message}
}

export {getPneumoniaScore}