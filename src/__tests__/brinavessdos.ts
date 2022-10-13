import { getBrinavess } from "../brinavessdos"

test('It should return the correct amounts', () => {
    const {firstInfusion, secondInfusion} = getBrinavess(100)
    expect(firstInfusion.volume).toEqual(75)
    expect(firstInfusion.dosage).toEqual(450)
    expect(secondInfusion.volume).toEqual(50)
    expect(secondInfusion.dosage).toEqual(300)
})

test('It should return the correct amounts', () => {
    const {firstInfusion, secondInfusion} = getBrinavess(75)
    expect(firstInfusion.volume).toEqual(56.3)
    expect(firstInfusion.dosage).toEqual(338)
    expect(secondInfusion.volume).toEqual(37.5)
    expect(secondInfusion.dosage).toEqual(225)
})

test('It should return the correct amounts', () => {
    const {firstInfusion, secondInfusion} = getBrinavess(67)
    expect(firstInfusion.volume).toEqual(50.3)
    expect(firstInfusion.dosage).toEqual(302)
    expect(secondInfusion.volume).toEqual(33.5)
    expect(secondInfusion.dosage).toEqual(201)
})

test('It should throw error for incorrect weight', () => {
    expect(() => {
        getBrinavess(1000)
    }).toThrow('Invalid weight for brinavess')
})