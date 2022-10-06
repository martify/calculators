const isValidGlucose = (glukos: unknown): boolean => 
    typeof glukos === 'number' && glukos > 0 && glukos < 1000

function calculateInsulin(bglukos: number, dailyInsulin: number) {
    if (!isValidGlucose(bglukos)) {
        throw new Error('Invalid amount of glucose for insulin')
    }
    return Math.round((bglukos - 8) * dailyInsulin / 100)
}

export {calculateInsulin, isValidGlucose}