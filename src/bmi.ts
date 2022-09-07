const isValidHeight = (height: unknown): boolean =>
  typeof height === 'number' && height > 0 && height <= 300

const isValidWeight = (weight: unknown): boolean =>
  typeof weight === 'number' && weight > 0 && weight <= 700

function getBMI(height: number, weight: number) {
  if (!isValidHeight(height)) {
    throw new Error('Invalid height for BMI')
  }

  if (!isValidWeight(weight)) {
    throw new Error('Invalid weight for BMI')
  }

  const bmi = weight / (height / 100) ** 2
  return Math.round(bmi * 100) / 100
}

export {getBMI, isValidWeight, isValidHeight}
