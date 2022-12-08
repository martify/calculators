import { getSyncopeRule } from "../syncope"

test('It should return the correct message', () => {
    const fields = {
        heart: false,
        hemtocrite: false,
        ekg: false,
        dyspne: false,
        systBT: false
    }
    expect(getSyncopeRule(fields)).toEqual('Låg risk för allvarlig händelse')
})

test('It should return the correct message', () => {
    const fields = {
        heart: true,
        hemtocrite: true,
        ekg: true,
        dyspne: true,
        systBT: true
    }
    expect(getSyncopeRule(fields)).toEqual('Hög risk för allvarlig händelse')
})

test('It should return the correct message', () => {
    const fields = {
        heart: true,
        hemtocrite: false,
        ekg: true,
        dyspne: false,
        systBT: false
    }
    expect(getSyncopeRule(fields)).toEqual('Hög risk för allvarlig händelse')
})