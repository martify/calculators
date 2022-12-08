import { getPERC } from "../percRule"

test('It should return correct message', () => {
    const fields = {
        age: true,
        pulse: true,
        sat: false,
        lungemboli: false,
        trauma: false,
        hemoptys: false,
        estrogen: true,
        dvt: false
    }
    expect(getPERC(fields)).toEqual("PERC-regeln kan inte användas för att utesluta lungemboli")
})

test('It should return correct message', () => {
    const fields = {
        age: false,
        pulse: false,
        sat: false,
        lungemboli: false,
        trauma: false,
        hemoptys: false,
        estrogen: false,
        dvt: false
    }
    expect(getPERC(fields)).toEqual("Risken för lungemboli är under 2%")
})

test('It should return correct message', () => {
    const fields = {
        age: true,
        pulse: true,
        sat: true,
        lungemboli: true,
        trauma: true,
        hemoptys: true,
        estrogen: true,
        dvt: true
    }
    expect(getPERC(fields)).toEqual("PERC-regeln kan inte användas för att utesluta lungemboli")
})