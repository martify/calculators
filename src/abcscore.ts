export type Risks = {
    mechanism: boolean,
    systBT: boolean,
    pulse: boolean,
    fast: boolean
}


function calcABCScore(fields: Risks) {
    let score = Object.values(fields).reduce((sum, risk) => (risk ? sum + 1: sum), 0)
    if (score >= 2) {
        return 'Sannolikt behov av massiv transfusion'
    }
    return 'Minde sannolikt behov av massiv transfusion'
}

export {calcABCScore}