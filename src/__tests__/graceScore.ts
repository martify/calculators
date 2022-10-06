import { getRisk } from "../graceScore"

test('it should return the expected value', () => {
    expect(getRisk(57, 70, 110, 1.2, 3, true, false, true)).toEqual({"prob": 22, "roundedScore": 151})
})