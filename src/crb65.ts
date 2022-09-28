type Symptomes = {
    newConfusion: boolean,
    breathFreq: boolean,
    hasHypotoni: boolean,
    age65: boolean
}

function calculateScore(fields: Symptomes) {
    let score = 0
    Object.values(fields).forEach(value => {
        if (value) {
            score++
        }
    })
    return score
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
    const score = calculateScore(fields)
    const message = scoreToText(score)
    return {score, message}
}

export {getPneumoniaScore}