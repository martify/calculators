

function calcFib4(age: number, ukat: number, platelet: number, alt: number) {
    return Math.round((age * ukat * 59.88) / (platelet * Math.sqrt(alt * 59.88)) * 100) / 100
}

export {calcFib4}