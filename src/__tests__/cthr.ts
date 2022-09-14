import {calcHeadRule} from '../cthr'

test('7 points', () => {
    const fields = {
        GCS_15: true,
        hasFracture: true,
        hasBaseFracture: true,
        hasThrownUp: true,
        isOver65: true,
        hasAmnesia: true,
        dangerousMech: true
    }
    const message = calcHeadRule(fields)
    expect(message).toEqual('CT skalle rekommenderas')
})

test('4 points', () => {
    const fields = {
        GCS_15: false,
        hasFracture: true,
        hasBaseFracture: true,
        hasThrownUp: true,
        isOver65: false,
        hasAmnesia: true,
        dangerousMech: false
    }
    const message = calcHeadRule(fields)
    expect(message).toEqual('CT skalle rekommenderas')
})

test('1 points', () => {
    const fields = {
        GCS_15: true,
        hasFracture: false,
        hasBaseFracture: false,
        hasThrownUp: false,
        isOver65: false,
        hasAmnesia: false,
        dangerousMech: false
    }
    const message = calcHeadRule(fields)
    expect(message).toEqual('CT skalle rekommenderas')
})

test('0 points', () => {
    const fields = {
        GCS_15: false,
        hasFracture: false,
        hasBaseFracture: false,
        hasThrownUp: false,
        isOver65: false,
        hasAmnesia: false,
        dangerousMech: false
    }
    const message = calcHeadRule(fields)
    expect(message).toEqual('CT skalle behövs inte')
})
