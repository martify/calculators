type Criteria = {
    GCS_15: boolean,
    hasFracture: boolean,
    hasBaseFracture: boolean,
    hasThrownUp: boolean,
    isOver65: boolean,
    hasAmnesia:boolean,
    dangerousMech: boolean
}

function calculatePoints(fields: Criteria): number {
    let points = 0
    Object.values(fields).forEach(value => {
      if (value) {
        points++
      }
    })
    return points
  }

  function pointsToText(points: number) {
    if (points >= 1){
        return 'CT skalle rekommenderas'
    }

    return 'CT skalle behövs inte'
  }

  function calcHeadRule(fields: Criteria): string{
    const points = calculatePoints(fields)
    return pointsToText(points)
  }

export {calcHeadRule}
