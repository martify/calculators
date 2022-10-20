const isValidWeight = (weight: unknown): boolean => 
    typeof weight === 'number' && weight > 0 && weight < 500

function calcWaterDefic(sNa: number, weight: number, patient: number) {
    if (!isValidWeight(weight)) {
        throw new Error('Invalid weight for vattenunderskott')
    }

    let k = 0.6
    if (patient === 1 || patient === 2) {
        k = 0.5
    }
    else if (patient === 3) {
        k = 0.45
    }
    return Math.round(k * weight *(sNa / 140 - 1) * 100) / 100
}

export {calcWaterDefic}