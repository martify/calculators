
const isValidAge = (age: unknown): boolean => 
    typeof age === 'number' && age > 0 && age < 150


function calculateAgeRisk(age: number) {
    if (age < 35) {
        return 0
    }
    else if (age < 45 && age >= 35) {
        return 0 + (age - 35) * 1.8
    }
    else if (age < 55 && age >= 45) {
        return 18 + (age - 45) * 1.8
    }
    else if (age < 65 && age >= 55) {
        return 36 + (age - 55) * 1.8
    }
    else if (age < 75 && age >= 65) {
        return 54 + (age - 35) * 1.9
    }
    else if (age < 85 && age >= 75) {
        return 73 + (age - 75) * 1.8
    }
    else if (age < 90 && age >= 85) {
        return 91 + (age - 85) * 1.8
    }
    return 100
}

function calculatePulse(pulse: number) {
    if (pulse < 70) {
        return 0
    }
    else if (pulse < 80 && pulse >= 70) {
        return 0 + (pulse - 70) * 0.3
    }
    else if (pulse < 90 && pulse >= 80) {
        return 3 + (pulse - 80) * 0.2
    }
    else if (pulse < 100 && pulse >= 90) {
        return 5 + (pulse - 90) * 0.3
    }
    else if (pulse < 110 && pulse >= 100) {
        return 8 + (pulse - 100) * 0.2
    }
    else if (pulse < 150 && pulse >= 110) {
        return 10 + (pulse - 110) * 0.3
    }
    else if (pulse < 200 && pulse >= 150) {
        return 22 + (pulse - 150) * 0.3
    }
    return 34
}

function calculatePressure(pressure: number) {
    if (pressure < 80) {
        return 40
    }
    else if (pressure < 100 && pressure >= 80) {
        return 40 - (pressure - 80) * 0.3
    }
    else if (pressure < 110 && pressure >= 100) {
        return 34 - (pressure - 100) * 0.3
    }
    else if (pressure < 120 && pressure >= 110) {
        return 31 - (pressure - 110) * 0.4
    }
    else if (pressure < 130 && pressure >= 120) {
        return 27 - (pressure - 120) * 0.3
    }
    else if (pressure < 140 && pressure >= 130) {
        return 24 - (pressure - 130) * 0.3
    }
    else if (pressure < 150 && pressure >= 140) {
        return 20 - (pressure - 140) * 0.4
    }
    else if (pressure < 160 && pressure >= 150) {
        return 17 - (pressure - 150) * 0.3
    }
    else if (pressure < 180 && pressure >= 160) {
        return 14 - (pressure - 160) * 0.3
    }
    else if (pressure < 200 && pressure >= 180) {
        return 8 - (pressure - 180) * 0.4
    }
    return 0
} 

function calculateCreatine(creatine: number) {
    if (creatine < 0.2) {
        return creatine * 1 / 0.2
    }
    else if (creatine < 0.4 && creatine >= 0.2) {
        return 1 + (creatine - 0.2) * (2 / 0.2)
    }
    else if (creatine < 0.6 && creatine >= 0.4) {
        return 3 + (creatine - 0.4) * (1 / 0.2)
    }
    else if (creatine < 0.8 && creatine >= 0.6) {
        return 4 + (creatine - 0.6) * (2 / 0.2)
    }
    else if (creatine < 1 && creatine >= 0.8) {
        return 6 + (creatine - 0.8) * (1 / 0.2)
    }
    else if (creatine < 1.2 && creatine >= 1) {
        return 7 + (creatine - 1) * (1 / 0.2)
    }
    else if (creatine < 1.4 && creatine >= 1.2) {
        return 8 + (creatine - 1.2) * (2 / 0.2)
    }
    else if (creatine < 1.6 && creatine >= 1.4) {
        return 10 + (creatine - 1.4) * (1 / 0.2)
    }
    else if (creatine < 1.8 && creatine >= 1.6) {
        return 11 + (creatine - 1.6) * (2 / 0.2)
    }
    else if (creatine < 2 && creatine >= 1.8) {
        return 13 + (creatine - 1.8) * (1 / 0.2)
    }
    else if (creatine < 3 && creatine >= 2) {
        return 14 + (creatine - 2) * (7 / 1)
    }
    else if (creatine < 4 && creatine >= 3) {
        return 21 + (creatine - 3) * (7 / 1)
    }
    return 28
}

function calculateKillip(killip: number) {
    if (killip == 1) return 0
    else if (killip == 2) return 15
    else if (killip == 3) return 29
    return 44
}


function scoreToProb(score: number) {
    
}

function getRisk(age: number, pulse: number, bloodPressure: number, creatine: number, killip: number, heartStop: boolean, stDeviation: boolean, hightendHeart: boolean) {
    if (!isValidAge(age)){
        throw new Error('Invalid age for grace score')
    }

    let totalScore = calculateAgeRisk(age) + calculateCreatine(creatine) + calculateKillip(killip) + calculatePressure(bloodPressure) + calculatePulse(pulse)
    if (heartStop) totalScore += 30
    if (stDeviation) totalScore += 17
    if (hightendHeart) totalScore += 13
    return totalScore
}

export {getRisk, isValidAge}