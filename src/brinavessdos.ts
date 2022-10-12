const isValidWeight = (weight: unknown): boolean => 
 typeof weight === 'number' && weight > 0 && weight < 500

function getBrinavess(weight: number) {
    if (!isValidWeight) {
        throw new Error('Invalid weight for brinavess')
    }
    const firstInfusion = {volume: Math.round(weight * 7.5)/10, dosage: Math.round(weight * 4.5)}
    const secondInfusion = {volume: Math.round(weight * 5)/10, dosage: weight * 3}

    return {firstInfusion, secondInfusion}

}

export {getBrinavess, isValidWeight}