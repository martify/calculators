import { convertHbA1c } from "../hba1c"

test('It should return correct values', () => {
    const fields = {
        ifcc: true,
        monoS: false,
        dcct: false,
        jds: false,
        mmol: false,
        mg: false
    }
    const {mmol, mg, dcct, monoS, ifcc, jds} = convertHbA1c(22, fields)
    expect(mmol).toEqual(4.05)
    expect(mg).toEqual(72.82)
    expect(dcct).toEqual(4.16)
    expect(monoS).toEqual(3.12)
    expect(ifcc).toEqual(22)
    expect(jds).toEqual(3.76)
})

test('It should return correct values', () => {
    const fields = {
        ifcc: false,
        monoS: false,
        dcct: false,
        jds: true,
        mmol: false,
        mg: false
    }
    const {mmol, mg, dcct, monoS, ifcc, jds} = convertHbA1c(7, fields)
    expect(mmol).toEqual(9.13)
    expect(mg).toEqual(164.37)
    expect(dcct).toEqual(7.35)
    expect(monoS).toEqual(6.46)
    expect(ifcc).toEqual(57)
    expect(jds).toEqual(7)
})

test('It should return correct values', () => {
    const fields = {
        ifcc: false,
        monoS: false,
        dcct: true,
        jds: false,
        mmol: false,
        mg: false
    }
    const {mmol, mg, dcct, monoS, ifcc, jds} = convertHbA1c(5.5, fields)
    expect(mmol).toEqual(6.18)
    expect(mg).toEqual(111.15)
    expect(dcct).toEqual(5.5)
    expect(monoS).toEqual(4.52)
    expect(ifcc).toEqual(37)
    expect(jds).toEqual(5.12)
})

test('It should return correct values', () => {
    const fields = {
        ifcc: false,
        monoS: false,
        dcct: false,
        jds: false,
        mmol: true,
        mg: false
    }
    const {mmol, mg, dcct, monoS, ifcc, jds} = convertHbA1c(14, fields)
    expect(mmol).toEqual(14)
    expect(mg).toEqual(252)
    expect(dcct).toEqual(10.41)
    expect(monoS).toEqual(9.65)
    expect(ifcc).toEqual(90)
    expect(jds).toEqual(10.09)
})

test('It should return correct values', () => {
    const fields = {
        ifcc: false,
        monoS: true,
        dcct: false,
        jds: false,
        mmol: false,
        mg: false
    }
    const {mmol, mg, dcct, monoS, ifcc, jds} = convertHbA1c(6.5, fields)
    expect(mmol).toEqual(9.2)
    expect(mg).toEqual(165.52)
    expect(dcct).toEqual(7.39)
    expect(monoS).toEqual(6.5)
    expect(ifcc).toEqual(57)
    expect(jds).toEqual(7.04)
})