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
    arm_right: number, arm_left: number, leg_right: number, leg_left: number, ataxi: number,
    sensibility: number, language: number, dysarthria: number, sensory: number) {
    const orientScore = countOrientation(fields)
    return awake + eyes + sight + face + arm_left + arm_right + leg_left + leg_right + ataxi + sensibility + language + dysarthria + sensory + orientScore

    }

    export {calculateStrokeScale}