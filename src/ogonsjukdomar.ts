type Symptoms = {
    redEyes: boolean,
    chafeFeel: boolean,
    lightSens: boolean,
    hasItch: boolean,
    hasPus: boolean,
    hasPain: boolean,
    movingSpots: boolean,
    hasFlicker: boolean,
    darkShadow: boolean,
    hookSight: boolean,
    coloredRings: boolean
}

function calculateSymptomes(fields: Symptoms) {
    let probScale = {irit: 0, keratit: 0, glaukom: 0, konjunk: 0, glaskropp: 0, nathinna: 0, makula: 0}
    if (fields.redEyes) {
        probScale.irit++
        probScale.keratit++
        probScale.konjunk++
        probScale.glaukom++
    }
    if (fields.chafeFeel) {
        probScale.keratit++
    }
    if (fields.lightSens) {
        probScale.irit++
        probScale.keratit++
    }
    if (fields.hasItch) {
        probScale.konjunk++
    }
    if (fields.hasPus) {
        probScale.konjunk++
    }
    if (fields.hasPain) {
        probScale.irit++
        probScale.glaukom++
    }
    if (fields.movingSpots) {
        probScale.irit++
        probScale.glaskropp++
        probScale.nathinna++
    }
    if (fields.hasFlicker) {
        probScale.glaskropp++
        probScale.nathinna++
    }
    if (fields.darkShadow) {
        probScale.nathinna++
    }
    if (fields.hookSight) {
        probScale.makula++
    }
    if (fields.coloredRings) {
        probScale.glaukom++
    }
    return probScale
}

function sortDiagnoses(probScale: object) {
   return Object.entries(probScale).sort((a, b) => {
                if (b[1] > a[1]) {
                    return 1
                }
                else {
                    return -1
                }
            })
}

function mergeDiagnoses(sortedScale: [string, any][]) {
    let final = {}
    let place = 0
    let lastValue = 0
    sortedScale.forEach(value => {
        let diagnoses = value[0]
        let rank = value[1]
        if(lastValue != rank) {
            place++
            final = {...final, [place]: [diagnoses]}
            lastValue = rank
        }
        else {
            console.log(place)
            final[place].push(diagnoses)
        }

    })
    return final
} 

function getDiagnoses(fields: Symptoms) {
    const probScale = calculateSymptomes(fields)
    const sortedScale =  sortDiagnoses(probScale)
    return mergeDiagnoses(sortedScale)
}

export {getDiagnoses}
