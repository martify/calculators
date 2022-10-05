
const isValidMillimole = (millimole: unknown): boolean =>
    typeof millimole === 'number' && millimole >= 0

const isValidGram = (gram: unknown): boolean =>
typeof gram === 'number' && gram >= 0 && gram <= 1000

function correctedCalcium(millimole: number, gram: number) {
    if (!isValidMillimole(millimole)) {
        throw new Error('Invalid millimole for corrected calcium')
    }
    if (!isValidGram(gram)) {
        throw new Error('Invalid gram for corrected calcium')
    }
    
    return Math.round(millimole + 0.02 * (40 - gram))
}

export {correctedCalcium, isValidMillimole, isValidGram}