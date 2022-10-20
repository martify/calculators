export type Risks = {
    melena: boolean,
    sight: boolean,
    liver: boolean,
    heart: boolean
}

export type Fields = {
    woman: boolean,
    bHB: number,
    sUrea: number, 
    systBT: number,
    pulse: number,
    risks: Risks
}

function calcbHB(bHB: number, woman: boolean) {
    if (woman) {
        if (bHB < 100) return 6
        else if (bHB < 120) return 1
        return 0
    }
    if (bHB < 100) return 6
    else if (bHB < 120) return 3
    else if (bHB < 130) return 1
    return 0
}

function calcSUrea(sUrea: number) {
    if (sUrea > 25) return 6
    else if (sUrea >= 10) return 4
    else if (sUrea >= 8) return 3
    else if (sUrea >= 6.5) return 2
    return 0
}

function calcBT(systBT: number) {
    if (systBT < 90) return 3
    else if (systBT < 100) return 2
    else if (systBT < 110) return 1
    return 0
}

function calcPulse(pulse: number) {
    if (pulse >= 100) return 1
    return 0
}

function getBlatchfordScore(fields: Fields) {
    let score = Object.values(fields.risks).reduce((sum, risk) => (risk ? sum + 2: sum), 0)
    if (fields.risks.melena) {
        score -= 1
    }
    return score + calcbHB(fields.bHB, fields.woman) + calcBT(fields.systBT) + calcPulse(fields.pulse) + calcSUrea(fields.sUrea)
}

export {getBlatchfordScore}