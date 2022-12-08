const isValidMillimole = (millimole: unknown): boolean => 
    typeof millimole === 'number' && millimole > 0 && millimole <= 1000

function calculateWintersFormula(millimole: number) {
    if (!isValidMillimole(millimole)) {
        throw new Error('Invalid millimole for winters formula')
    }
    const roofValue = Math.round((1.5 * millimole + 10) / 7.52 * 100) / 100
    const floorValue = Math.round((1.5 * millimole + 6) / 7.52 * 100) / 100
    return {floorValue, roofValue}
}

export {calculateWintersFormula}