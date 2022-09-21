import { getRisk } from "../lungemboli"


test('9 score', () => {
    const fields = {
        isDVT: true,
        isHeart: false,
        isHemoptys: false,
        isImmobilised: true,
        isLungeboli: true,
        isMalaligned: false,
        isLE: true   
    }
    const {score, message} = getRisk(fields)
    expect(score).toEqual(9)
    expect(message).toEqual('Hög sannolikhet')
})

test('2.5 score', () => {
    const fields = {
        isDVT: false,
        isHeart: true,
        isHemoptys: false,
        isImmobilised: false,
        isLungeboli: false,
        isMalaligned: true,
        isLE: false   
    }
    const {score, message} = getRisk(fields)
    expect(score).toEqual(2.5)
    expect(message).toEqual('Låg sannolikhet')
})