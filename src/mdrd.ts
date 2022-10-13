
function getMDRD(age: number, creatine: number, isWoman: boolean) {
    
    let clearance = 186.3 * (creatine / 88.4) ** (-1.154) * age ** (-0.203)
    if (isWoman) {
        clearance *= 0.742
    }
    return Math.round(clearance)
}

export {getMDRD}