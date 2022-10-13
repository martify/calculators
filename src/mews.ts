export type Data = {
    breath: number,
    pulse: number,
    systBT: number,
    temp: number,
    cns: number, 
    urine: number
}


const isValidHB = (pulse: unknown): boolean =>
    typeof pulse === 'number' && pulse > 0 && pulse < 250

const isValidTemp = (temp: unknown): boolean =>
    typeof temp === 'number' && temp > 30 && temp < 45

function calcBreath(breath: number) {
    if (breath >= 30) return 3
    else if (breath >= 21 || breath < 9) return 2
    else if (breath >= 15) return 1
    return 0
}

function calcPulse(pulse: number) {
    if (pulse >= 130) return 3
    else if (pulse >= 111 || pulse < 40) return 2
    else if (pulse >= 101 || pulse <= 50) return 1
    return 0
}

function calcPressure(systBT: number) {
    if (systBT <= 70) return 3
    else if (systBT <= 80 || systBT >= 200) return 2
    else if (systBT <= 100) return 1
    return 0
}

function calcTemp(temp: number) {
    if (temp <= 35 || temp > 38.5) return 2
    else if (temp <= 36 || temp >= 38.1) return 1
    return 0 
}

function getMewsScore(fields: Data) {
    if (!isValidHB(fields.pulse)) {
        throw new Error('Invalid pulse for MEWS')
    }
    if (!isValidTemp(fields.temp)) {
        throw new Error('Invalid temperature for MEWS')
    }
    
    return calcBreath(breath) + calcPressure(systBT) + calcPulse(pulse) + calcTemp(temp) + cns + urine
}