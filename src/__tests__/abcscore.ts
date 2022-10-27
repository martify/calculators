import { calcABCScore } from "../abcscore"

test('It should return correct message', () => {
    const fields = {
        mechanism: true,
        systBT: true,
        pulse: true,
        fast: true
    }
    expect(calcABCScore(fields)).toEqual('Sannolikt behov av massiv transfusion')
})

test('It should return correct message', () => {
    const fields = {
        mechanism: false,
        systBT: true,
        pulse: true,
        fast: true
    }
    expect(calcABCScore(fields)).toEqual('Sannolikt behov av massiv transfusion')
})

test('It should return correct message', () => {
    const fields = {
        mechanism: true,
        systBT: false,
        pulse: false,
        fast: false
    }
    expect(calcABCScore(fields)).toEqual('Minde sannolikt behov av massiv transfusion')
})

test('It should return correct message', () => {
    const fields = {
        mechanism: false,
        systBT: false,
        pulse: false,
        fast: false
    }
    expect(calcABCScore(fields)).toEqual('Minde sannolikt behov av massiv transfusion')
})