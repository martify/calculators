const isValidAge = (age: unknown): boolean => 
    typeof age === 'number' && age > 0 && age < 150

function calcFib4(age: number, ukat: number, platelet: number, alt: number) {
    if (!isValidAge(age)) {
        throw new Error('Invalid age for Fib-4')
    }
    return Math.round((age * ukat * 59.88) / (platelet * Math.sqrt(alt * 59.88)) * 100) / 100
}

export {calcFib4}