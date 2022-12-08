
export type Risks = {
    focal: boolean,
    numb: boolean,
    conscious: boolean,
    intoxicated: boolean,
    injury: boolean
}

function getNEXUS(fields: Risks) {
    const sum = Object.values(fields).reduce((sum, risk) => (risk ? sum + 1: sum), 0)

    if (sum > 0){
        return 'Risk för skada: Röntga'
    }
    return 'Låg risk för skada: Röntgen krävs inte'

}

export {getNEXUS}