import { calculateScore } from "../childPugh"

test('It should return correct message and score 6', () => {
    const {score, message} = calculateScore(101, 54, 1.6, 1, 1, true)
    expect(score).toEqual(6)
    expect(message).toEqual("Child-Pugh class A")
})

test('It should return correct message and score 8', () => {
    const {score, message} = calculateScore(34, 29, 2.2, 2, 1, false)
    expect(score).toEqual(8)
    expect(message).toEqual("Child-Pugh class B")
})

test('It should return correct message and score 11', () => {
    const {score, message} = calculateScore(61, 30, 3, 2, 3, true)
    expect(score).toEqual(11)
    expect(message).toEqual("Child-Pugh class C")
})

test('It should return correct message and score 11', () => {
    const {score, message} = calculateScore(42, 21, 2.8, 1, 2, false)
    expect(score).toEqual(11)
    expect(message).toEqual("Child-Pugh class C")
})