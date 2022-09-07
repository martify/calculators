const isValidHours = (hours: unknown): boolean =>
  typeof hours === 'number' && hours >= 0 && hours <= 500

const isValidDripRate = (dripRate: unknown): boolean =>
  typeof dripRate === 'number' && dripRate > 0 && dripRate <= 1000

function getInfusion(hours: number, dripRate: number) {
  if (!isValidHours(hours)) {
    throw new Error('Invalid hours for Infusion')
  }

  if (!isValidDripRate(dripRate)) {
    throw new Error('Invalid drip rate for Infusion')
  }

  const minutes = hours * 60

  return (dripRate * minutes) / 20000
}

export {getInfusion, isValidHours, isValidDripRate}
