import { calcDiaS3 } from "../dias3"

test('It should return correct percentage', () => {
    const fields = {
        age: 50,
        seizure: false,
        shd: true,
        epileptic: false,
        hemorrhage: true,
        decomp: false 
    }
    expect(calcDiaS3(fields)).toEqual(27.78)
})

test('It should return correct percentage', () => {
    const fields = {
        age: 27,
        seizure: true,
        shd: false,
        epileptic: true,
        hemorrhage: false,
        decomp: true 
    }
    expect(calcDiaS3(fields)).toEqual(42.92)
})

