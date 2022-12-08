
export type Values = {
    age: number,
    weight: number,
    creatine: number,
    length: number,
    auc: number,
    male: boolean
}

const isValidAge = (age: unknown): boolean =>
  typeof age === 'number' && age > 0 && age <= 150

const isValidLength = (length: unknown): boolean =>
  typeof length === 'number' && length > 0 && length <= 300

const isValidWeight = (weight: unknown): boolean =>
  typeof weight === 'number' && weight > 0 && weight <= 700

function getGFR(age: number, weight: number, creatine: number, length: number, male: boolean) {
    if (age <= 20) {
        return 42.5 * length / creatine * (weight /  70) ** 0.7
    }
    else if (male) {
        return 1.23 * (140 - age) * weight / creatine
    }
    return 1.04 * (140 - age) * weight / creatine
}

function calcCalverts(fields: Values) {
    if (!isValidAge(fields.age)) {
        throw new Error('Invalid age for Calverts formula')
    }
    if (!isValidLength(fields.length)) {
        throw new Error('Invalid length for Calverts formula')
    }
    if (!isValidWeight(fields.weight)) {
    throw new Error('Invalid weight for Calverts formula')
    }
    let gfr = getGFR(fields.age, fields.weight, fields.creatine, fields.length, fields.male)
    return Math.round((gfr + 25) * fields.auc)
}

export {calcCalverts}