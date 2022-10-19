
const isValidMillimole = (millimole: unknown): boolean =>
    typeof millimole === 'number' && millimole > 0 && millimole < 1000

function validateAll(millimoles: number[]) {
    let variableError = false
    millimoles.forEach(millimole => {
        if (!isValidMillimole(millimole)){
            variableError = true
        }
    })
    if (variableError){
        throw new Error('Invalid millimole for osmolgap')
    }
}


function getOsmolgap(sNA: number, sUrea: number, bGlukos: number, measuredOsm: number) {
    validateAll([sNA, sUrea, bGlukos])

    return measuredOsm - Math.round(1.86 * sNA + bGlukos + sUrea + 9)
}

export {getOsmolgap}