
const isValidNeurofile = (neutrofile: unknown): boolean => 
    typeof neutrofile === 'number' && neutrofile <= 100 && neutrofile >= 0

function scoreToText(score: number) {
    if (score <= 4) {
        return "Låg sannolikhet"
    }
    else if (score <= 8 && score > 4) {
        return "Intermediär sannolikhet"
    }
    return "Hög sannolikhet"
}

function getAIRscore(vomit: boolean, pain: boolean, numbness: number, highTemp: boolean, neutrofile: number, leukocyes: number, crp: number) {
    if (!isValidNeurofile(neutrofile)) {
        throw new Error('Invalid percentage for neurofile')
    }
    
    let score = 0
    if (vomit) score++
    if (pain) score++
    if (highTemp) score++

    if (neutrofile >= 70 && neutrofile <= 84) score ++
    else if (neutrofile >= 85) score += 2

    if (leukocyes >= 10 && leukocyes <= 14.9) score++
    else if (leukocyes >= 15) score += 2

    if (crp >= 10 && crp <= 49) score++
    else if (crp >= 59) score += 2

    score += numbness

    return {score, message: scoreToText(score)}
}

export {getAIRscore}