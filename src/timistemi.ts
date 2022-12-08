export type Symptoms = {
    diabetes: boolean,
    hypertoni: boolean,
    anginaPectoris: boolean,
    killipTwo: boolean,
    highST: boolean,
    longTime: boolean
}

const isValidAge = (age: unknown): boolean => 
    typeof age === 'number' && age > 0 && age < 150

const isValidWeight = (weight: unknown): boolean => 
  typeof weight === 'number' && weight > 0 && weight < 500


function calculatePoints(age: number, pressure: number, pulse: number, weight: number, fields: Symptoms) {
    let score = 0
    if (age >= 75) score += 3
    else if (age >= 65 && age < 75) score += 2

    if (pressure < 100) score += 3
    if (pulse > 100) score += 2
    if (weight < 67) score++

    score += Object.values(fields).reduce((sum, isRisk) => (isRisk ? sum + 1 : sum), 0)
    if (fields.killipTwo) score ++
    return score
}

function calculateMortality(score: number) {
    switch(score) {
        case 0:
            return 0.8
        case 1: 
            return 1.6
        case 2: 
            return 2.2
        case 3:
            return 4.4
        case 4:
            return 7.3
        case 5:
            return 12.4
        case 6:
            return 16.1
        case 7:
            return 23.4
        case 8:
            return 26.8
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
            return 35.9

        default:
            throw new Error('Unhandled case in TIMI-Score STEMI')
    }
}

function getTIMIStemi(age: number, pressure: number, pulse: number, weight: number, fields: Symptoms) {
    if (!isValidAge(age)) {
        throw new Error('Invalid age for TIMI-score STEMI')
    }
    if (!isValidWeight(weight)) {
        throw new Error('Invalid weight for TIMI-score STEMI')
    }
    
    const score = calculatePoints(age, pressure, pulse, weight, fields)
    return {score, mortality: calculateMortality(score)}
}

export {getTIMIStemi, isValidAge, isValidWeight}