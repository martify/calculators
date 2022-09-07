const isValidAmount = (amount: unknown): boolean =>
  typeof amount === 'number' && amount > 0 && amount <= 100000

const isValidDripRate = (dripRate: unknown): boolean =>
  typeof dripRate === 'number' && dripRate > 0 && dripRate <= 100000

function getInfusionTime(amount: number, dripRate: number) {
  if (!isValidAmount(amount)) {
    throw new Error('Invalid amount for Infusion Time')
  }

  if (!isValidDripRate(dripRate)) {
    throw new Error('Invalid drip rate for Infusion Time')
  }

  return Math.round((20 * 1000 * amount) / 60 / dripRate)
}

export {getInfusionTime, isValidAmount, isValidDripRate}
