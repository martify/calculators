import { getAncleRule } from "../ottawaAnkle"


test("score 3", () => {
    const fields = {
        immediateProblem: true,
        delayedProblem: true,
        isSoreOB: true,
        isSoreON: false
    }
    expect(getAncleRule(fields)).toEqual("Röntgen av mellanfoten rekommenderas")
})

test("score 4", () => {
    const fields = {
        immediateProblem: true,
        delayedProblem: true,
        isSoreOB: true,
        isSoreON: true
    }
    expect(getAncleRule(fields)).toEqual("Röntgen av mellanfoten rekommenderas")
})


test("score 0", () => {
    const fields = {
        immediateProblem: false,
        delayedProblem: false,
        isSoreOB: false,
        isSoreON: false
    }
    expect(getAncleRule(fields)).toEqual("Röntgen av mellanfoten ej nödvändig")
})