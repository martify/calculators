import { getPromille } from "../promille"

test('It should return correct result', () => {
    const {clinical, legal} = getPromille(50, true, true)
    expect(clinical).toEqual(0.338)
    expect(legal).toEqual(0.327)
})

test('It should return correct result', () => {
    const {clinical, legal} = getPromille(22, false, true)
    expect(clinical).toEqual(0.173)
    expect(legal).toEqual(0.173)
})

test('It should return correct result', () => {
    const {clinical, legal} = getPromille(34, true, false)
    expect(clinical).toEqual(1.278)
    expect(legal).toEqual(1.235)
})

test('It should return correct result', () => {
    const {clinical, legal} = getPromille(46, false, false)
    expect(clinical).toEqual(2.006)
    expect(legal).toEqual(2.006)
})