export type Values = {
    age: number,
    bmi: number, 
    ifg: boolean,
    asat: number,
    plat: number, 
    albumin: number
}


const isValidAge = (age: unknown): boolean => 
    typeof age === 'number' && age > 0 && age < 150

const isValidBMI = (bmi: unknown): boolean => 
    typeof bmi === 'number' && bmi > 0 && bmi < 100
 
function calcNAFLD(fields: Values) {
    if (!isValidAge(fields.age)) {
        throw new Error('Invalid age for NAFLD fibrosis score')
    }
    if (!isValidBMI(fields.bmi)) {
        throw new Error('Invalid BMI for NAFLD fibrosis score')
    }

    let score = -1.675
    if (fields.ifg) {
        score += 1.13
    }
    return Math.round((score + 0.037 * fields.age + 0.094 * fields.bmi - 0.013 * fields.plat - 0.066 * fields.albumin + 0.99 * fields.asat) * 100) / 100
}

export {calcNAFLD}