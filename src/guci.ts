

function calculateGUCI(asat: number, reference: number, pk: number, tpk: number) {
    return Math.round((asat * pk * 100) / (tpk * reference) * 100) /100
}

export {calculateGUCI}