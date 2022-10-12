const isValidpH = (pH: unknown): boolean => 
 typeof pH === 'number' && pH >= 0 && pH <= 14


function correctedCalcium(calcium: number, pH: number) {
    return Math.round(calcium * (1 - 0.53 * (7.4 - pH)) * 100) / 100
}

export {correctedCalcium, isValidpH}