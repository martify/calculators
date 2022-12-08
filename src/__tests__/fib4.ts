import { calcFib4 } from "../fib4"

test('It should return correct value', () => {
    expect(calcFib4(65, 56, 193, 58)).toEqual(19.16)
})

test('It should return correct value', () => {
    expect(calcFib4(42, 18, 132, 22)).toEqual(9.45)
})

test('It should return correct value', () => {
    expect(calcFib4(54, 31, 97, 26)).toEqual(26.19)
})

test('It should throw error if invalid age', () => {
    expect(() => {
        calcFib4(1000, 43, 43, 43)
    }).toThrow('Invalid age for Fib-4')
})