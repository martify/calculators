import { getWetbags } from "../wetbags"

test('it should show correct values when 4 months old', () => {
    const age = 4
    const isMonths = 1

    const {weight, defib, conversion, tube, bolus, bolusTrauma, adrenalin, glucose,
        stesolidIV, stesolidPR, adrenalinINH, albuterol, atrovent, atropin, amiodaron} = getWetbags(age, isMonths)

    expect(weight).toEqual(6)
    expect(defib).toEqual(24)
    expect(conversion).toEqual(6)
    expect(tube).toEqual(4.083)
    expect(bolus).toEqual(120)
    expect(bolusTrauma).toEqual(60)
    expect(adrenalin).toEqual(0.06)
    expect(glucose).toEqual(12)
    expect(stesolidIV).toEqual(1.5)
    expect(stesolidPR).toEqual(3)
    expect(adrenalinINH).toEqual(5)
    expect(albuterol).toEqual(2.5)
    expect(atrovent).toEqual(0.25)
    expect(atropin).toEqual(0.12)
    expect(amiodaron).toEqual(30)
})

test('it should show correct values when 5 years old', () => {
    const age = 5
    const isMonths = 0

    const {weight, defib, conversion, tube, bolus, bolusTrauma, adrenalin, glucose,
        stesolidIV, stesolidPR, adrenalinINH, albuterol, atrovent, atropin, amiodaron} = getWetbags(age, isMonths)

    expect(weight).toEqual(18)
    expect(defib).toEqual(72)
    expect(conversion).toEqual(18)
    expect(tube).toEqual(5.25)
    expect(bolus).toEqual(360)
    expect(bolusTrauma).toEqual(180)
    expect(adrenalin).toEqual(0.18)
    expect(glucose).toEqual(36)
    expect(stesolidIV).toEqual(4.5)
    expect(stesolidPR).toEqual(9)
    expect(adrenalinINH).toEqual(5)
    expect(albuterol).toEqual(5)
    expect(atrovent).toEqual(0.25)
    expect(atropin).toEqual(0.36)
    expect(amiodaron).toEqual(90)
})


test('it should show correct values when 8 years old', () => {
    const age = 8
    const isMonths = 0

    const {weight, defib, conversion, tube, bolus, bolusTrauma, adrenalin, glucose,
        stesolidIV, stesolidPR, adrenalinINH, albuterol, atrovent, atropin, amiodaron} = getWetbags(age, isMonths)

    expect(weight).toEqual(31)
    expect(defib).toEqual(124)
    expect(conversion).toEqual(31)
    expect(tube).toEqual(6)
    expect(bolus).toEqual(620)
    expect(bolusTrauma).toEqual(310)
    expect(adrenalin).toEqual(0.31)
    expect(glucose).toEqual(62)
    expect(stesolidIV).toEqual(7.75)
    expect(stesolidPR).toEqual(15.5)
    expect(adrenalinINH).toEqual(5)
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