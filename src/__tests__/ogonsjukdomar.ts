import { getDiagnoses } from "../ogonsjukdomar"

test('it should show ordered risks correctly', () => {
    const fields = {
    redEyes: false,
    chafeFeel: false,
    lightSens: true,
    hasItch: false,
    hasPus: false,
    hasPain: false,
    movingSpots: true,
    hasFlicker: false,
    darkShadow: true,
    hookSight: false,
    coloredRings: false
    }
    expect(getDiagnoses(fields)).toEqual({
        "1": ["hinna", "irit"], 
        "2": ["glaskropp", "keratit"], 
        "3": ["makula", "konjunk", "glaukom"]
    })
})

test('it should show ordered risks correctly', () => {
    const fields = {
    redEyes: true,
    chafeFeel: true,
    lightSens: false,
    hasItch: true,
    hasPus: true,
    hasPain: true,
    movingSpots: false,
    hasFlicker: true,
    darkShadow: false,
    hookSight: true,
    coloredRings: true
    }
    expect(getDiagnoses(fields)).toEqual({
        "1": ["konjunk", "glaukom"], 
        "2": ["keratit", "irit"], 
        "3": ["makula", "nathinna", "glaskropp"]
    })
})