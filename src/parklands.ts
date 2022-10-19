
const isValidWeight = (weight: unknown): boolean => 
    typeof weight === 'number' && weight > 0 && weight < 500

const isValidPerc = (perc: unknown): boolean => 
    typeof perc === 'number' && perc > 0 && perc <= 100


function calcParklands(weight: number, perc: number) {
    if (!isValidPerc(perc)) {
        throw new Error('Invalid percentage for Parklands formula')
    }
    if (!isValidWeight(weight)) {
        throw new Error('Invalid weight for Parklands formula')
    }
    return 4 * weight * perc
}

export {calcParklands, isValidPerc, isValidWeight}