import { getKnee } from "../ottawaKnee"


test("score 5", () => {
    const fields = {
        age55: true,
        isolatedSore: true,
        soreFibula: true,
        noBend: true,
        noPressure: true
    }
    expect(getKnee(fields)).toEqual("Kriterierna inte uppfyllda: knät kan behöva röntgas")
})

test("score 3", () => {
    const fields = {
        age55: false,
        isolatedSore: true,
        soreFibula: true,
        noBend: true,
        noPressure: false
    }
    expect(getKnee(fields)).toEqual("Kriterierna inte uppfylla: knät kan behöva röntgas")
})


test("score 0", () => {
    const fields = {
        age55: false,
        isolatedSore: false,
        soreFibula: false,
        noBend: false,
        noPressure: false
    }
    expect(getKnee(fields)).toEqual("Röntgen behövs inte")
})