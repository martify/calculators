type Symptopmes = {
    diabetes: boolean,
    hypertoni: boolean,
    cholesterol: boolean,
    familyKorona: boolean,
    smoker: boolean,
    knownKorona: boolean,
    usedASA: boolean,
    angina: boolean,
    stChange: boolean,
    heartMark: boolean
}

function calculateScore(age: number, fields: Symptopmes) {
    let score = 0
    let riskScore = 0
    Object.values(fields).splice(0, 5).forEach(value => {
        if (value) {
            riskScore++
        }
    })
    Object.values(fields).splice(5, 10).forEach(value => {
        if (value){
            score++
        }
    })
    if (riskScore >= 3) {
        score++
    }
    if (age >= 65)  {
        score++
    }
    return score
}

function scoreToPerc(score: number) {
    switch(score) {
        case 0:
        case 1:
            return {mort: 1.2, heart: 2.3, revasc: 1.2}
        case 2:
            return {mort: 1, heart: 2.1, revasc: 6}
        case 3:
            return {mort: 1.7, heart: 3.7, revasc: 9.5}
        case 4:
            return {mort: 2.5, heart: 5, revasc: 12.2}
        case 5:
            return {mort: 5.6, heart: 8.5, revasc: 14.3}
        case 6:
        case 7:
            return {mort: 6.5, heart: 15.8, revasc: 20.9}
        default:
            throw new Error('Case in TIMI-score NSTEMI')
    }
}

function getTimiNStemi(age: number, fields: Symptopmes) {
    const score = calculateScore(age, fields)
    return scoreToPerc(score)
}


export {getTimiNStemi}