import { calculateStrokeScale } from "../nihss"

test('it should return 17', () => {
    const fields = {
        correctMonth: true,
        correctAge: true,
        correctEyes: false,
        correctHand: false,
    }
    expect(calculateStrokeScale(1, fields, 0, 2, 0, 3, 4, 0, 0, 0, 2, 5, 0, 0)).toEqual(19)
})


test('it should return 0', () => {
    const fields = {
        correctMonth: true,
        correctAge: true,
        correctEyes: true,
        correctHand: true,
    }
    expect(calculateStrokeScale(0, fields, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)).toEqual(0)
})

test('it should return 0', () => {
    const fields = {
        correctMonth: true,
        correctAge: true,
        correctEyes: true,
        correctHand: true,
    }
    expect(calculateStrokeScale(3, fields, 2, 3, 3, 4, 4, 4, 4, 2, 2, 3, 3, 2)).toEqual(39)
})