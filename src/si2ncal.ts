
export type Risks = {
    age: number,
    glucose: number,
    hemoglobin: number,
    female: boolean,
    hemorrhage: boolean,
    infection: boolean,
    focalDef: boolean,
    coma: boolean,
    cancer: boolean
}

const isValidAge = (age: unknown): boolean => 
    typeof age === 'number' && age > 0 && age < 150

function calcSi2NCal(fields: Risks) {
    if (!isValidAge(fields.age)) {
        throw new Error('Invalid age for Si2NCal2C')
    }
    const coeffs = [
        [0.14, 0.064],
        [-0.015, -0.007],
        [0.652, 0.373],
        [0.538, 0.282],
        [0, 0.513],
        [1.161, 0.24],
        [1.411, 0.794],
        [0.894, 1.289]
    ]
    const mortScore = Object.values(fields).splice(1,9).reduce((sum: number, risk, index) => 
        typeof risk === 'number' ? sum + risk * coeffs[index][1] : risk ? sum + coeffs[index][1] : sum
    , fields.age * 0.0194)
    
    const mRSScore = Object.values(fields).splice(1,9).reduce((sum: number, risk, index) => 
        typeof risk === 'number' ? sum + risk * coeffs[index][0] : risk ? sum + coeffs[index][0] : sum
    , fields.age * -0.06 + 0.001 * fields.age ** 2)

    const mRSRisk = 1 / (1 + Math.E ** (- ( mRSScore - 1.926)))
    const mort30 =  1 - (1 - 0.02315291) ** (Math.E ** (mortScore - 0.8831435))
    const mortYear =  1 - (1 - 0.04227197) ** (Math.E ** (mortScore - 0.8831435))


    return {
        mRSRisk: Math.round(mRSRisk * 100),
        mort30: Math.round(mort30 * 100),
        mortYear: Math.round(mortYear * 100)
    }
}

export {calcSi2NCal}