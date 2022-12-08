
export type Risks = {
    heart: boolean,
    hemtocrite: boolean,
    ekg: boolean,
    dyspne: boolean,
    systBT: boolean
}

function getSyncopeRule(fields: Risks) {
    let score = Object.values(fields).reduce((sum, risk) => (risk ? sum + 1: sum), 0)
    if (score > 0) {
        return 'Hög risk för allvarlig händelse'
    }
    return 'Låg risk för allvarlig händelse'
}

export {getSyncopeRule}