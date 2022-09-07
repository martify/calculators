import { getWetbags } from "../wetbags"

test('it should show correct values', () => {
    const {weight, defib, conversion, tube, bolus, bolus_trauma, adrenalin, glucose,
        stesolid_iv, stesolid_pr, adrenalin_inh, albuterol, atrovent, atropin, amiodaron} = getWetbags(4, 1)
    expect(weight).toEqual(6)
    expect(defib).toEqual(24)
    expect(conversion).toEqual(6)
    expect(tube).toEqual(4.083)
    expect(bolus).toEqual(120)
    expect(bolus_trauma).toEqual(60)
    expect(adrenalin).toEqual(0.06)
    expect(glucose).toEqual(12)
    expect(stesolid_iv).toEqual(1.5)
    expect(stesolid_pr).toEqual(3)
    expect(adrenalin_inh).toEqual(5)
    expect(albuterol).toEqual(2.5)
    expect(atrovent).toEqual(0.25)
    expect(atropin).toEqual(0.12)
    expect(amiodaron).toEqual(30)
})

test('it should show correct values', () => {
    const {weight, defib, conversion, tube, bolus, bolus_trauma, adrenalin, glucose,
        stesolid_iv, stesolid_pr, adrenalin_inh, albuterol, atrovent, atropin, amiodaron} = getWetbags(8, 0)
    expect(weight).toEqual(31)
    expect(defib).toEqual(124)
    expect(conversion).toEqual(31)
    expect(tube).toEqual(6)
    expect(bolus).toEqual(620)
    expect(bolus_trauma).toEqual(310)
    expect(adrenalin).toEqual(0.31)
    expect(glucose).toEqual(62)
    expect(stesolid_iv).toEqual(7.75)
    expect(stesolid_pr).toEqual(15.5)
    expect(adrenalin_inh).toEqual(5)
    expect(albuterol).toEqual(5)
    expect(atrovent).toEqual(0.25)
    expect(atropin).toEqual(0.62)
    expect(amiodaron).toEqual(155)
})

test('it should throw if invalid age', () => {
    expect(() => {
        getWetbags(15, 0)
    }).toThrow('Invalid age for wetbags')
})