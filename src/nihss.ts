type Orientation = {
    correctMonth: boolean,
    correctAge: boolean,
    correctEyes: boolean,
    correctHand: boolean
}

function countOrientation(fields: Orientation): number {
    let score = 0
    Object.values(fields).forEach(value => {
        if(!value){
            score++
        }
    })
    return score
}

function calculateStrokeScale(awake: number, fields: Orientation, eyes: number, sight: number, face: number,
    armRight: number, armLeft: number, legRight: number, legLeft: number, ataxi: number,
    sensibility: number, language: number, dysarthria: number, sensory: number) {
    const orientScore = countOrientation(fields)
    return awake + eyes + sight + face + armLeft + armRight + legLeft + legRight + ataxi + sensibility + language + dysarthria + sensory + orientScore

    }

    export {calculateStrokeScale}