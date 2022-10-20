export type Resting = {
    eye: number,
    cheek: number,
    mouth: number
}

export type Willing = {
    eyebrows: number,
    closeEyes: number,
    smile: number,
    nose: number,
    whistle: number
}

export type Unwilling = {
    eyebrows: number,
    closeEyes: number,
    smile: number,
    nose: number,
    whistle: number
}

export type Risks = {
    fieldOne: Resting,
    fieldTwo: Willing,
    fieldThree: Unwilling
}

function getSunnyScore(fields: Risks) {
    const score = Object.values(fields).reduce((sum, field) => (sum + Object.values(field).reduce((sum2, risk) => sum2 + risk, 0)), 0)
    return 100 - score
}

export {getSunnyScore}