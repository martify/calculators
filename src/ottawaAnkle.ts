type Ancle = {
    immediateProblem: boolean,
    delayedProblem: boolean,
    isSoreOB: boolean,
    isSoreON: boolean
}

function getScore(fields: Ancle) {
    let score = 0
    Object.values(fields).forEach(value => {
        if (value) {
            score++
        }
    })
    return score
}

function scoreToText(score: number) {
    if (score >= 2) {
        return "Röntgen av mellanfoten rekommenderas"
    }
    return "Röntgen av mellanfoten ej nödvändig"
}

function getAncleRule(fields: Ancle) {
    const score = getScore(fields)

    return scoreToText(score)
    
}

export {getAncleRule}