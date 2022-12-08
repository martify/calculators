export type Risks = {
    age: number, // Input field
    isFemale: boolean,
    nyha: number, // List 0-3
    ccs4: boolean,
    insulin: boolean,
    extraCardiac: boolean,
    cpd: boolean,
    poorMob: boolean,
    prevSurgery: boolean,
    renal: number, // List 0-3
    AE: boolean,
    critical: boolean,
    lvFunc: number, // List 0-3
    recentMI: boolean,
    pulmHyp: number, // List 0-2
    urgency: number, // List 0-3
    weightOf: number, // List 0-3
    thoracic: boolean
}

const isValidAge = (age: unknown): boolean => 
    typeof age === 'number' && age > 0 && age < 150

function calcEuroscore(fields: Risks) {
    if (!isValidAge(fields.age)) {
        throw new Error('Invalid age for euroscore')
    }
    const coeffs = {
        0: 0.2196434,
        1: {
            0: 0,
            1: 0.1070545, 
            2: 0.2958358, 
            3: 0.5597929
        }, 
        2: 0.2226147,
        3: 0.3542749,
        4: 0.5360268,
        5: 0.1886564,
        6: 0.2407181,
        7: 1.118599,
        8: {
            0: 0,
            1: 0.303553,
            2: 0.8592256,
            3: 0.6421508
        },
        9: 0.6194522,
        10: 1.086517,
        11: {
            0: 0,
            1: 0.3150652,
            2: 0.8084096,
            3: 0.9346919
        },
        12: 0.1528943,
        13: {
            0: 0,
            1: 0.1788899,
            2: 0.3491457
        },
        14: {
            0: 0,
            1: 0.3174673,
            2: 0.7039121,
            3: 1.362947
        },
        15: {
            0: 0,
            1: 0.0062118,
            2: 0.5521478,
            3: 0.9724533
        },
        16: 0.6527205
    }
    let riskScore = 0
    
    riskScore += Object.values(fields).splice(1, 17).reduce((sum: number, risk, index) => { 
        if (typeof risk === 'number') {
            return sum + Object.values(Object.values(coeffs)[index])[risk]
        }

        else if (typeof risk === 'boolean' && risk) {
            return sum + Object.values(coeffs)[index]
        }
        return sum
    }, 0)

    if (fields.age <= 60) {
        riskScore += 0.0285181
    }
    else {
        riskScore += (fields.age - 59) * 0.0285181
    }
    return Math.round((Math.E ** (-5.324537 + riskScore)) / (1 + Math.E ** (-5.324537 + riskScore)) * 10000) / 100

}

export {calcEuroscore, isValidAge}