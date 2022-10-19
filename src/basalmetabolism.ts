
const isValidHeight = (height: unknown): boolean => 
    typeof height === 'number' && height > 0 && height < 300

const isValidWeight = (weight: unknown): boolean => 
    typeof weight === 'number' && weight > 0 && weight < 700

const isValidAge = (age: unknown): boolean =>
    typeof age === 'number' && age >= 0 && age < 150

function getBasalMetabolism(height: number, weight: number,  age: number) {
    if (!isValidWeight(weight)) {
        throw new Error('Invalid weight for basalmetabolism')
    }
    if (!isValidHeight(height)) {
        throw new Error('Invalid height for basalmetabolism')
    }
    if (!isValidAge(age)) {
        throw new Error('Invalid age for basalmetabolism')
    }

    const basalMale = Math.round(66.4730 + weight * 13.7516 + height * 5.0033 - age * 6.7550)
    const basalFemale = Math.round(655.0955 + weight * 9.5634 + height * 1.8496 - age * 4.6756)
    return {basalMale, basalFemale}
}

export {getBasalMetabolism, isValidAge, isValidWeight, isValidHeight}