enum AgeDefine {
    Years = 0,
    Months = 1
}

const isValidAge = (age: unknown): boolean =>
    typeof age === 'number' && age >= 0 && age <= 12 

function getWeight(age: number, definition: AgeDefine) {
    if (age < 1 || definition === AgeDefine.Months) {
        return age / 2 + 4
    }
    else if (age >= 1 && age <=5) {
        return age * 2 + 8
    }
    else {
        return age * 3 + 7
    }
}

function getTube(age: number, definition: AgeDefine) {
    if (definition === AgeDefine.Months){
        return Math.round((age / 48 + 4) * 1000) / 1000
    }
    else {
        return Math.round((age / 4 + 4) * 1000) / 1000
    }
}

function getAlbuterol(age: number, definition: AgeDefine){
    if (age < 5 || definition === AgeDefine.Months){
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
    const weight = getWeight(age, definition)
    const defib = weight * 4
    const conversion = weight
    const tube = getTube(age, definition)
    const bolus = 20 * weight
    const bolus_trauma = 10 * weight
    const adrenalin = 0.01 * weight
    const glucose = 2 * weight
    const stesolid_iv = 0.25 * weight
    const stesolid_pr = 0.5 * weight
    const adrenalin_inh = 5
    const albuterol = getAlbuterol(age, definition)
    const atrovent = 0.25
    const atropin = 0.02 * weight
    const amiodaron = 5 * weight
    return {weight, defib, conversion, tube, bolus, bolus_trauma, adrenalin, glucose,
            stesolid_iv, stesolid_pr, adrenalin_inh, albuterol, atrovent, atropin, amiodaron}
}

export {getWetbags}