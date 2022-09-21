enum AgeDefine {
    Years = 0,
    Months = 1
}

const isValidAge = (age: unknown): boolean =>
    typeof age === 'number' && age >= 0 && age <= 12 


function getWeight(age: number) {
    if (age < 1) {
        return age * 6 + 4
    }
    else if (age >= 1 && age <=5) {
        return age * 2 + 8
    }
    else {
        return age * 3 + 7
    }
}

function getTube(age: number) {
    return Math.round((age / 4 + 4) * 1000) / 1000
}

function getAlbuterol(age: number){
    if (age < 5){
        return 2.5
    }
    else {
        return 5
    }
}

function getWetbags(age: number, definition: AgeDefine) {
    if (!isValidAge(age)){
        throw new Error('Invalid age for wetbags')
    }

    const ageInYears = definition === AgeDefine.Months ? age / 12 : age
    const weight = getWeight(ageInYears)

    return {
        weight, 
        defib: weight * 4, 
        conversion: weight, 
        tube: getTube(ageInYears), 
        bolus: 20 * weight, 
        bolusTrauma: 10 * weight, 
        adrenalin: 0.01 * weight, 
        glucose: 2 * weight,
        stesolidIV: 0.25 * weight, 
        stesolidPR: 0.5 * weight, 
        adrenalinINH: 5, 
        albuterol: getAlbuterol(ageInYears), 
        atrovent: 0.25, 
        atropin: 0.02 * weight, 
        amiodaron: 5 * weight
    }
}

export {getWetbags, isValidAge}