export type Ancle = {
    immediateProblem: boolean,
    delayedProblem: boolean,
    isSoreOB: boolean,
    isSoreON: boolean
}

function scoreToText(score: number) {
    if (score >= 2) {
        return "Röntgen av mellanfoten rekommenderas"
    }
    return "Röntgen av mellanfoten ej nödvändig"
}

function getAncleRule(fields: Ancle) {
    const score = Object.values(fields).reduce((sum, isRisk) => (isRisk ? sum + 1: sum), 0)

    return scoreToText(score)
    
}

export {getAncleRule}