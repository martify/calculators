function getPromille(ethanol: number, plasmaOrSerum: boolean, unitChange: boolean) {
    let clinical = 0
    let legal = 0
    
    if (plasmaOrSerum) {
        clinical = ethanol / 1.16 * 0.046 / 1.055
        legal = ethanol / 1.2 * 0.046 / 1.055
    }
    else { clinical = ethanol * 0.046 / 1.055
        legal = ethanol * 0.046 / 1.055 
    }

    if (unitChange) {
        clinical *= 18 / 100
        legal *= 18 / 100
    }

    clinical = Math.round(clinical * 1000) / 1000
    legal = Math.round(legal * 1000) / 1000

    return {clinical, legal}

}

export {getPromille}