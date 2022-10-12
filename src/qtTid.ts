
const isValidHeartBeat = (frequency: unknown): boolean => 
    typeof frequency === "number" && frequency > 0 && frequency <= 250

function calculateBazett(qtTime: number, rrInterval: number) {
    return Math.round(qtTime / (rrInterval / 1000)**(1/2) * 10) / 10
}

function calculateFriderica(qtTime: number, rrInterval: number) {
    return Math.round(qtTime / (rrInterval / 1000)**(1/3) * 10) / 10
}

function calculateFramingham(qtTime: number, rrInterval: number) {
    return Math.round((qtTime + 0.154 * (1000 - rrInterval)) * 10) / 10
}

function calculateHodges(qtTime: number, rrInterval: number) {
    return Math.round((qtTime + 1.75 * (60000 / rrInterval - 60)) * 10) / 10
}

function getCorrectedQTTime(qtTime: number, frequency: number, allForms: boolean) {
    if (!isValidHeartBeat(frequency)){
        throw new Error('Invalid heartbeat for corrected QT-time')
    }
    const rrInterval = 60000 / frequency
    if (allForms) {
        return {
            bazett: calculateBazett(qtTime, rrInterval),
            friderica: calculateFriderica(qtTime, rrInterval),
            framingham: calculateFramingham(qtTime, rrInterval),
            hodges: calculateHodges(qtTime, rrInterval)
        }
    }
    return calculateBazett(qtTime, rrInterval)
}

export {getCorrectedQTTime, isValidHeartBeat}