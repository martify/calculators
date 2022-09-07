type Centor = {
  isFever: boolean
  isTonsill: boolean
  isCentorLgl: boolean
  isCough: boolean
}

function calculatePoints(fields: Centor): number {
  let points = 0
  Object.values(fields).forEach(value => {
    if (value) {
      points++
    }
  })
  return points
}

function pointsToText(points: number): string {
  switch (points) {
    case 0:
    case 1:
    case 2:
      return 'Inget snabbtest. Symtomatisk behandling vid behov.'
    case 3:
    case 4:
      return 'Antibiotika vid positivt snabbtest.'
    default:
      throw new Error('Unhandled case in Centor')
  }
}

function getCentor(fields: Centor) {
  const points = calculatePoints(fields)
  const message = pointsToText(points)
  return {points, message}
}

export {getCentor}
