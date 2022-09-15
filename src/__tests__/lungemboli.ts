import { getRisk } from "../lungemboli"


test('7.5 score', () => {
    const fields = {
        isDVT: false,
        isHeart: true,
        isHemoptys: false,
        isImmobilised: true,
        isLungeboli: true,
        isMalaligned: false,
        isLE: true   
    }
    const {score, message} = getRisk(fields)
    expect(score).toEqual(7.5)
    expect(message).toEqual('Hög sannolikhet')
})

test('3 score', () => {
    const fields = {
        isDVT: false,
        isHeart: true,
        isHemoptys: false,
        isImmobilised: false,
        isLungeboli: true,
        isMalaligned: false,
        isLE: false   
    }
    const {score, message} = getRisk(fields)
    expect(score).toEqual(3)
    expect(message).toEqual('Låg sannolikhet')
})