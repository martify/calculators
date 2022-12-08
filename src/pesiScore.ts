export type Symptomes = {
    isMale: boolean,
    hasCancer: boolean,
    heartFailure: boolean,
    chronicLung: boolean,
    highPulse: boolean,
    systolicBT: boolean,
    breathFreq: boolean,
    lowTemp: boolean,
    mentalIssue: boolean,
    lowOxygen: boolean
}

const isValidAge = (age: unknown): boolean => 
 typeof age === 'number' && age > 0 && age < 150

function scoreToMortality(score: number) {
    if (score <= 65) {
        return "0-1,6%"
    }
    else if (score <= 85 && score > 65) {
        return "1,7-3,5%"
    }
    else if (score <= 105 && score > 85) {
        return "3,2-7,1%"
    }
    else if (score <= 125 && score > 105) {
        return "4,0-11,4%"
    }
    return "10,0-24,5%"
}

function calculatePESI(age: number, fields: Symptomes) {
    if (!isValidAge(age)) {
        throw new Error('Invalid age for PESI-score')
    }
    let score = age
    if (fields.isMale) score += 10
    if (fields.hasCancer) score += 30
    if (fields.heartFailure) score += 10
    if (fields.chronicLung) score += 10
    if (fields.highPulse) score += 20
    if (fields.systolicBT) score += 30
    if (fields.breathFreq) score += 20
    if (fields.lowTemp) score += 20
    if (fields.mentalIssue) score += 60
    if (fields.lowOxygen) score += 20
    const percentage = scoreToMortality(score)
    return {score, percentage}
}

export {calculatePESI, isValidAge}