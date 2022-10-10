import { getDVT } from "../dvtscore"


test('score 4', () => {
    const fields = {
        isCancer: true,
        isCast: true,
        isImmobolised: false,
        isSensitive: true,
        isSwollen: true,
        is3cm: false,
        isEdema: false,
        isShallow: true,
        isDiagnosed: true,   
        isNotDiagnosed: true
    }
    const {score, message} = getDVT(fields)
    expect(score).toEqual(4)
    expect(message).toEqual("Hög sannolikhet")
})

test('score 9', () => {
    const fields = {
        isCancer: true,
        isCast: true,
        isImmobolised: true,
        isSensitive: true,
        isSwollen: true,
        is3cm: true,
        isEdema: true,
        isShallow: true,
        isDiagnosed: true,   
        isNotDiagnosed: false
    }
    const {score, message} = getDVT(fields)
    expect(score).toEqual(9)
    expect(message).toEqual("Hög sannolikhet")
})

test('score 0', () => {
    const fields = {
        isCancer: false,
        isCast: false,
        isImmobolised: false,
        isSensitive: false,
        isSwollen: false,
        is3cm: false,
        isEdema: false,
        isShallow: false,
        isDiagnosed: false,   
        isNotDiagnosed: false
    }
    const {score, message} = getDVT(fields)
    expect(score).toEqual(0)
    expect(message).toEqual("Låg sannolikhet")
})

test('score -2', () => {
    const fields = {
        isCancer: false,
        isCast: false,
        isImmobolised: false,
        isSensitive: false,
        isSwollen: false,
        is3cm: false,
        isEdema: false,
        isShallow: false,
        isDiagnosed: false,   
        isNotDiagnosed: true
    }
    const {score, message} = getDVT(fields)
    expect(score).toEqual(-2)
    expect(message).toEqual("Låg sannolikhet")
})