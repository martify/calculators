
const isValidHeight = (height: unknown): boolean =>
    typeof height === 'number' && height > 0 && height <= 300

const isValidWeight = (weight: unknown): boolean =>
    typeof weight === 'number' && weight > 0 && weight <= 700

function calculateBodySize(height: number, weight: number) {
    if (!isValidHeight(height)) {
        throw new Error('Invalid height for body size')
    }
    if (!isValidWeight(weight)) {
        throw new Error('Invalid weight for body size') 
    }
    return Math.round(height ** 0.725 * weight ** 0.425 * 0.007184 * 100) / 100
}

export {calculateBodySize}