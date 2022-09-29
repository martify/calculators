
const isValidAge = (age: unknown): boolean => 
    typeof age === 'number' && age > 0 && age < 150


function calculateProbability(risk: number) {
    return (2.71828 ** risk) / (1 + 2.71828 ** risk)
}

function getRisk(age: number, pulse: number, bloodPressure: number, creatine: number, killip: number, heartStop: boolean, stDeviation: boolean, hightendHeart: boolean) {
    if (!isValidAge(age)){
        throw new Error('Invalid age for grace score')
    }

    let hospitalRisk = -7.7035 + age * 0.0531 + pulse * 0.0087 - bloodPressure * 0.0168 + creatine * 0.1823 + killip * 0.6931
    let homeRisk = age * 0.05713 + pulse * 0.00891 - bloodPressure * 0.0063 + creatine * 0.15807
    if (heartStop) hospitalRisk += 1.4586
    if (stDeviation) hospitalRisk += 0.47
    if (hightendHeart) hospitalRisk += 0.8755
    return Math.round(calculateProbability(hospitalRisk) * 1000) / 10
}

export {getRisk, isValidAge}