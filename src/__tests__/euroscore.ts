import { calcEuroscore } from "../euroscore"

test('It should return the correct probability', () => {
    const fields = {
        age: 60, // Input field
        isFemale: false,
        nyha: 0, // List 0-3
        ccs4: false,
        insulin: false,
        extraCardiac: false,
        cpd: false,
        poorMob: false,
        prevSurgery: false,
        renal: 3, // List 0-3
        AE: false,
        critical: false,
        lvFunc: 0, // List 0-3
        recentMI: false,
        pulmHyp: 0, // List 0-2
        urgency: 0, // List 0-3
        weightOf: 0, // List 0-3
        thoracic: false
    }
    expect(calcEuroscore(fields)).toEqual(0.94)
})


test('It should return the correct probability', () => {
    const fields = {
        age: 75, // Input field
        isFemale: true,
        nyha: 0, // List 0-3
        ccs4: true,
        insulin: true,
        extraCardiac: true,
        cpd: true,
        poorMob: true,
        prevSurgery: true,
        renal: 0, // List 0-3
        AE: true,
        critical: true,
        lvFunc: 0, // List 0-3
        recentMI: true,
        pulmHyp: 0, // List 0-2
        urgency: 0, // List 0-3
        weightOf: 0, // List 0-3
        thoracic: true
    }
    expect(calcEuroscore(fields)).toEqual(62.81)
})

test('It should return the correct probability', () => {
    const fields = {
        age: 83, // Input field
        isFemale: false,
        nyha: 1, // List 0-3
        ccs4: false,
        insulin: false,
        extraCardiac: false,
        cpd: false,
        poorMob: false,
        prevSurgery: false,
        renal: 0, // List 0-3
        AE: false,
        critical: false,
        lvFunc: 3, // List 0-3
        recentMI: false,
        pulmHyp: 2, // List 0-2
        urgency: 1, // List 0-3
        weightOf: 3, // List 0-3
        thoracic: false
    }
    expect(calcEuroscore(fields)).toEqual(12.35)
})

test('It should throw error for invalid age', () => {
    const fields = {
        age: 1000, // Input field
        isFemale: false,
        nyha: 1, // List 0-3
        ccs4: false,
        insulin: false,
        extraCardiac: false,
        cpd: false,
        poorMob: false,
        prevSurgery: false,
        renal: 0, // List 0-3
        AE: false,
        critical: false,
        lvFunc: 3, // List 0-3
        recentMI: false,
        pulmHyp: 2, // List 0-2
        urgency: 1, // List 0-3
        weightOf: 3, // List 0-3
        thoracic: false
    }
    expect(() => {
        calcEuroscore(fields)
    }).toThrow('Invalid age for euroscore')
})