import { getTimiNStemi } from "../timiNstemi"

test('It should show correct risk percentages', () => {
    const fields = {
        diabetes: true,
        hypertoni: false,
        cholesterol: false,
        familyKorona: true,
        smoker: true,
        knownKorona: true,
        usedASA: false,
        angina: true,
        stChange: false,
        heartMark: true
    }
    expect(getTimiNStemi(12, fields)).toEqual({"heart": 5, "mort": 2.5, "revasc": 12.2})
})

test('It should show correct risk percentages', () => {
    const fields = {
        diabetes: true,
        hypertoni: false,
        cholesterol: false,
        familyKorona: false,
        smoker: true,
        knownKorona: true,
        usedASA: true,
        angina: true,
        stChange: true,
        heartMark: true
    }
    expect(getTimiNStemi(72, fields)).toEqual({"heart": 15.8, "mort": 6.5, "revasc": 20.9})
})

test('It should show correct risk percentages', () => {
    const fields = {
        diabetes: false,
        hypertoni: true,
        cholesterol: true,
        familyKorona: false,
        smoker: true,
        knownKorona: true,
        usedASA: false,
        angina: false,
        stChange: false,
        heartMark: true
    }
    expect(getTimiNStemi(50, fields)).toEqual({"heart": 3.7, "mort": 1.7, "revasc": 9.5})
})

test('It should show correct risk percentages', () => {
    const fields = {
        diabetes: false,
        hypertoni: true,
        cholesterol: false,
        familyKorona: false,
        smoker: true,
        knownKorona: false,
        usedASA: false,
        angina: false,
        stChange: false,
        heartMark: false
    }
    expect(getTimiNStemi(90, fields)).toEqual({"heart": 2.3, "mort": 1.2, "revasc": 1.2})
})

test('It should show correct risk percentages', () => {
    const fields = {
        diabetes: false,
        hypertoni: false,
        cholesterol: false,
        familyKorona: false,
        smoker: true,
        knownKorona: false,
        usedASA: true,
        angina: false,
        stChange: false,
        heartMark: false
    }
    expect(getTimiNStemi(90, fields)).toEqual({"heart": 2.1, "mort": 1, "revasc": 6})
})