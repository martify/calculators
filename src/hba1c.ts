export type Source = {
    ifcc: boolean,
    monoS: boolean,
    dcct: boolean,
    jds: boolean,
    mmol: boolean,
    mg: boolean
}

function dcctToSugar(dcct: number) {
    return {mmol: Math.round((dcct * 28.7 - 46.7) / 18 * 100) / 100, mg: Math.round((dcct * 28.7 - 46.7) * 100) / 100}
}

function ifccToDCCT(ifcc: number) {
    return 0.09148 * ifcc + 2.152
}

function ifccToMonoS(ifcc: number) {
    return Math.round(( 0.0957 * ifcc + 1.016) * 100) / 100
}

function ifccToJDS(ifcc: number) {
    return Math.round((0.09274 * ifcc + 1.724) * 100) / 100
}


function convertHbA1c(indata: number, fields: Source) {
    if (fields.ifcc) {
        let dcct = ifccToDCCT(indata)
        const {mmol, mg} = dcctToSugar(dcct)
        return {mmol, mg, dcct: Math.round(dcct * 100) / 100, monoS: ifccToMonoS(indata), ifcc: indata, jds: ifccToJDS(indata)}
    }
    else if (fields.monoS) {
        let ifcc = 10.45 * indata - 10.62
        let dcct = ifccToDCCT(ifcc)
        const {mmol, mg} = dcctToSugar(dcct)
        return {mmol, mg, dcct: Math.round(dcct * 100) / 100, monoS: indata, ifcc: Math.round(ifcc), jds: ifccToJDS(ifcc)}
    }
    else if (fields.dcct) {
        let ifcc = 10.93 * indata - 23.5
        const {mmol, mg} = dcctToSugar(indata)
        return {mmol, mg, dcct: indata, monoS: ifccToMonoS(ifcc), ifcc: Math.round(ifcc), jds: ifccToJDS(ifcc)}
    }
    else if (fields.jds) {
        let ifcc = 10.78 * indata - 18.59
        let dcct = ifccToDCCT(ifcc)
        const {mmol, mg} = dcctToSugar(dcct)
        return {mmol, mg, dcct: Math.round(dcct * 100) / 100, monoS: ifccToMonoS(ifcc), ifcc: Math.round(ifcc), jds: indata}
    }
    else if (fields.mmol) {
        let dcct = (indata * 18 + 46.7) / 28.7
        let ifcc = 10.93 * dcct - 23.5
        return {mmol: indata, mg: indata * 18, dcct: Math.round(dcct * 100) / 100, monoS: ifccToMonoS(ifcc), ifcc: Math.round(ifcc), jds: ifccToJDS(ifcc)}
    }
    let dcct = (indata + 46.7) / 28.7
    let ifcc = 10.93 * dcct - 23.5
    return {mmol: Math.round(indata / 18 * 100) / 100, mg: indata, dcct: Math.round(dcct * 100) / 100, monoS: ifccToMonoS(ifcc), ifcc: Math.round(ifcc), jds: ifccToJDS(ifcc)}
}

export {convertHbA1c}