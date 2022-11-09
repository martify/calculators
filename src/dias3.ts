export type Risks = {
    age: number,
    seizure: boolean,
    shd: boolean,
    epileptic: boolean,
    hemorrhage: boolean,
    decomp: boolean 
}

function calcDiaS3(fields: Risks) {
    const coeffs = [0.0013, 0.42, 0.247, 0.856, 0.823, 0.368]
    let score = Object.values(fields).reduce((sum: number, risk, index) => (
        typeof risk === 'number' ? sum + coeffs[index] * risk : risk ? sum + coeffs[index] : sum
    ), 0)
    return Math.round((1 - (1 - 0.149769) ** Math.E ** (score - 0.4390308)) * 10000) / 100
}

export {calcDiaS3}