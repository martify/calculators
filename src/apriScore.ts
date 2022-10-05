

function getAPRIScore(asat: number, tpk: number, male: boolean) {
    if (male) {
        return Math.round((asat / (0.6 * 1.25) / tpk) * 1000) /10
    }
    return Math.round((asat / (0.6 * 1) / tpk) * 1000) / 10
}

export {getAPRIScore}