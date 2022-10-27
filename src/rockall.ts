
const isValidAge = (age: unknown): boolean => 
    typeof age === 'number' && age > 0 && age < 150

function getRockall(age: number, komor: number, chock: number, sigmata: number, endo: number) {
    if (!isValidAge(age)) {
        throw new Error('Invalid age for Rockall')
    }
    let score = komor + chock + sigmata + endo
    if (age >= 80) {
        score += 2
    }
    else if (age >= 60) score ++
    return score
}

export {getRockall}