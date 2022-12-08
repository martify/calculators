export type Risks = {
    age: boolean,
    pulse: boolean,
    sat: boolean,
    lungemboli: boolean,
    trauma: boolean,
    hemoptys: boolean,
    estrogen: boolean,
    dvt: boolean
}

function getPERC(fields: Risks) {
    const score = Object.values(fields).reduce((sum, isRisk) => (isRisk ? sum + 1: sum), 0)
    if (score > 0) {
        return "PERC-regeln kan inte användas för att utesluta lungemboli"
    }
    return "Risken för lungemboli är under 2%"
}

export {getPERC}