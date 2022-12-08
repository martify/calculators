import { getSunnyScore } from "../sunnybrook"

test('It should return 50', () => {
    const resting = {
        eye: 5,
        cheek: 10,
        mouth: 0
    }

    const willing = {
        eyebrows: 4,
        closeEyes: 8,
        smile: 4,
        nose: 16,
        whistle: 0
    }

    const unwilling = {
        eyebrows: 2,
        closeEyes: 0,
        smile: 1,
        nose: 0,
        whistle: 0
    }

    const fields = {
        resting,
        willing,
        unwilling
    }
    expect(getSunnyScore(fields)).toEqual(50)
})

test('It should return 2', () => {
    const resting = {
        eye: 5,
        cheek: 10,
        mouth: 5
    }

    const willing = {
        eyebrows: 16,
        closeEyes: 12,
        smile: 12,
        nose: 16,
        whistle: 12
    }

    const unwilling = {
        eyebrows: 2,
        closeEyes: 3,
        smile: 2,
        nose: 0,
        whistle: 3
    }

    const fields = {
        resting,
        willing,
        unwilling
    }
    expect(getSunnyScore(fields)).toEqual(2)
})