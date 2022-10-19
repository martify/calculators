

const isValidHeight = (height: unknown): boolean =>
typeof height === 'number' && height > 0 && height <= 300

const isValidWeight = (weight: unknown): boolean =>
typeof weight === 'number' && weight > 0 && weight <= 700

function calculateBodySize(height: number, weight: number, formula: number) {
    if (formula === 0){ /* Du Bois */
        return Math.round(height ** 0.725 * weight ** 0.425 * 0.007184 * 100) / 100
        }
    else if (formula === 1) {/* Mosteller */
        return Math.round(((weight * height) / 3600) ** 0.5 * 100) / 100
    }
    /* Haycock */
    return Math.round(0.024265 * weight ** 0.5378 * height ** 0.3964 * 100) / 100
    }

function getDosage(height: number, weight: number, dosage: number, formula: number) {
    if (!isValidHeight(height)) {
        throw new Error('Invalid height for dosage')
    }
    if (!isValidWeight(weight)) {
        throw new Error('Invalid weight for dosage') 
    }   

    return calculateBodySize(height, weight, formula) * dosage


}

export {getDosage, isValidHeight, isValidWeight}