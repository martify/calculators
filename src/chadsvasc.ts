type Risks = {
    hasHeartFail: boolean
    hasHyper: boolean
    hasStroke: boolean
    hasDiabetes: boolean
    hasVascular: boolean
    isWoman: boolean   
}

const isValidAge = (age: unknown): boolean =>
typeof age === 'number' && age >= 0 && age <= 150

function addRisks(values: Risks): number {
    let score = 0
    Object.values(values).forEach(value => {
        if(value){
            score++
        }
    })
    if (values.hasStroke){
        score++
    }
    return score
}

function calculateAgeRisk(age: number): number{
    let ageScore = 0
    if (age >= 75) {
        ageScore += 2
    } 
    else if (age >= 65 && age < 75) {
        ageScore++
    }
    return ageScore
}

function scoreToText(score: number, values: Risks): string {
    let message = ''
    if(score === 1 && values.isWoman) {
        message = 'Waran eller NOAC (om poäng endast för kvinnligt kön rekommenderas ofta ingen behandling)'
    }
    else if (score >= 1){
        message = "Waran eller NOAC"
    }
    else{
        message = "Ingen behandling"
    }
    return message
}

function riskPercentage(score:number) {
    switch(score){
        case 0:
            return 0
        case 1:
            return 1.3
        case 2:
            return 2.2
        case 3:
            return 3.2
        case 4:
            return 4.0
        case 5:
            return 6.7
        case 6:
            return 9.8
        case 7:
            return 9.6
        case 8:
            return 6.7
        case 9:
            return 15.2
        default:
            throw new Error("Unsupported score " + score)
    }
}

function calculateRisks(age: number, values: Risks){
    if (!isValidAge(age)) {
        throw new Error('Invalid age')
    }
    const riskScore = addRisks(values)
    const ageScore = calculateAgeRisk(age)
    const finalScore = ageScore + riskScore
    const message = scoreToText(finalScore, values)
    const riskPerc = riskPercentage(finalScore)
    return {finalScore, message, riskPerc}
}

export {calculateRisks, isValidAge}