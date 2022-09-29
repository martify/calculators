

function getAPRIScore(ast: number, plateletCount: number) {
    return Math.round((ast / 40) / plateletCount * 10000) / 100
}

export {getAPRIScore}