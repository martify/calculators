import { getNEXUS } from "../nexus"

test('It should return correct string when sum 0', () => {
    const fields = {
        focal: false,
        numb: false,
        conscious: false,
        intoxicated: false,
        injury: false
    }
    expect(getNEXUS(fields)).toEqual('Låg risk för skada: Röntgen krävs inte')
})

test('It should return correct string when sum 2', () => {
    const fields = {
        focal: false,
        numb: true,
        conscious: false,
        intoxicated: true,
        injury: false
    }
    expect(getNEXUS(fields)).toEqual('Risk för skada: Röntga')
})