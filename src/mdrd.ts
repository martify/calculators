
const isValidAge = (age: unknown): boolean => 
    typeof age === 'number' && age > 0 && age < 150

function getMDRD(age: number, creatine: number, isWoman: boolean) {
    if (!isValidAge(age)) {
        throw new Error('Invalid age for MDRD')
    }
    
    let clearance = 186.3 * (creatine / 88.4) ** (-1.154) * age ** (-0.203)
    if (isWoman) {
        clearance *= 0.742
    }
    return Math.round(clearance)
}

export {getMDRD}