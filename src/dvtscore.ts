type Boxes = {
    isCancer: boolean,
    isCast: boolean,
    isImmobolised: boolean,
    isSensitive: boolean,
    isSwollen: boolean,
    is3cm: boolean,
    isEdema: boolean,
    isShallow: boolean,
    isDiagnosed: boolean,
    isNotDiagnosed: boolean
}

function countScore(fields: Boxes): number {
    let score = 0
    Object.values(fields).forEach(value => {
        if (value) {
            score++
        }
    })
    if (fields.isNotDiagnosed) {
        score -= 3
    }
    return score
}

function scoreToText(score: number) {
    if (score < 2) {
        return "Låg sannolikhet"
    }
    else {
        return "Hög sannolikhet"
    }
}

function getDVT(fields: Boxes) {
    const score = countScore(fields)
    const message = scoreToText(score)
    return {score, message}
}

export {getDVT}