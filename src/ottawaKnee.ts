type Knee = {
    age55: boolean,
    isolatedSore: boolean,
    soreFibula: boolean,
    noBend: boolean,
    noPressure: boolean
}

function calculateScore(fields: Knee) {
    let score = 0
    Object.values(fields).forEach(value => {
        if (value){
            score++
        }
    })
    return score
}

function scoreToText(score:number) {
    if (score >= 1) {
        return "Kriterierna inte uppfylla: knät kan behöva röntgas"
    }
    return "Röntgen behövs inte"
}

function getKnee(fields: Knee){
    const score = calculateScore(fields)
    return scoreToText(score)
}

export {getKnee}