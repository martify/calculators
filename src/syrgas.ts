const isValidVar = (variable: unknown): boolean =>
    typeof variable === 'number' && variable > 0

function validateVars(variables: number[]){
    let variableError = false
    variables.forEach(variable => {
        if (!isValidVar(variable)){
            variableError = true
        }
    })
    if (variableError){
        throw new Error('Invalid number for syrgas')
    }
}

function calculateSyrgas(size: number, pressure: number, flow: number){
    validateVars([size, pressure, flow])
    const time = Math.round(size * pressure / flow)
    return time
}

export {calculateSyrgas}