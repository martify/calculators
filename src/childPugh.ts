


function calculateBilirubin(bilirubin: number, pbc: boolean) {
    let score = 0
    if (pbc) {
        if (bilirubin < 68) {
            score++
        }
        else if (68 <= bilirubin && bilirubin <= 171){
            score += 2
        }
        else {
            score += 3
        }
    }
    else if (bilirubin < 35) {
        score++
    }
    else if (35 <= bilirubin && bilirubin <= 51) {
        score += 2
    }
    else {score +=3}
    return score
}

function calculateAlbumin(albumin: number) {
    let score = 0
    if (albumin > 35) {
        score++
    }
    else if (albumin >= 28 && albumin <= 35) {
        score += 2
    }
    else {score +=3}
    return score
}

function calculatePPK(pPK: number) {
    let score = 0
    if (pPK < 1.7) {
        score++
    }
    else if (pPK >= 1.7 && pPK <= 2.3) {
        score += 2
    }
    else {score += 3}
    return score
}

function scoreToText(score) {
    if (score <= 6) {
        return "Child-Pugh class A"
    }
    else if (score > 6 && score <= 9) {
        return "Child-Pugh class B"
    }
    return "Child-Pugh class C"
}

function calculateScore(bilirubin: number, albumin: number, pPk: number, ascites: number, encefalopati: number, pbc: boolean) {
    const score = calculateAlbumin(albumin) + calculateBilirubin(bilirubin, pbc) + calculatePPK(pPk) + ascites + encefalopati
    const message = scoreToText(score)
    return {score, message}
}

export {calculateScore}