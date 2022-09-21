type Risks = {
    isDVT: boolean,
    isHeart: boolean,
    isHemoptys: boolean,
    isImmobilised: boolean,
    isLungeboli: boolean,
    isMalaligned: boolean,
    isLE: boolean
}

function calculateScore(fields: Risks): number {
    let score = 0
    if (fields.isDVT) {
        score += 3
    }
    if (fields.isHeart) {
        score += 1.5
    }
    if (fields.isHemoptys) {
        score ++
    }
    if (fields.isImmobilised) {
        score += 1.5
    }
    if (fields.isLungeboli) {
        score += 1.5
    }
    if (fields.isMalaligned) {
        score ++
    }
    if (fields.isLE) {
        score += 3
    }

    return score
}

function scoreToText(score: number) {
    if (score > 4) {
        return "Hög sannolikhet"
    }
    else {
        return "Låg sannolikhet"
    }
}

function getRisk(fields: Risks) {
    const score = calculateScore(fields)
    
    return {score, message: scoreToText(score)}
}

export {getRisk}