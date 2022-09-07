const isValidMillimole = (millimole: unknown): boolean =>
  typeof millimole === 'number' && millimole > 0 && millimole <= 250

function validateAll(millimoles: number[]) {
  let validationError = false

  millimoles.forEach(millimole => {
    if (!isValidMillimole(millimole)) {
      validationError = true
    }
  })

  if (validationError) {
    throw new Error('Invalid millimole for anjongap')
  }
}

function getAnjongap(na: number, k: number, ci: number, hco3: number) {
  validateAll([na, k, ci, hco3])

  const anjongap = na + k - ci - hco3
  return Math.round(anjongap * 10000000000) / 10000000000
}

export {getAnjongap, isValidMillimole}
