const isValidAmount = (amount: unknown): boolean =>
  typeof amount === 'number' && amount > 0 && amount <= 100000

const isValidHours = (hours: unknown): boolean =>
  typeof hours === 'number' && hours > 0 && hours <= 100000

function getDripRate(amount: number, hours: number) {
  if (!isValidAmount(amount)) {
    throw new Error('Invalid amount for Drip Rate')
  }

  if (!isValidHours(hours)) {
    throw new Error('Invalid hours for Drip Rate')
  }

  return Math.round((20 * 1000 * amount) / 60 / hours)
}

export {getDripRate, isValidAmount, isValidHours}
