enum Gender {
  Male = 0,
  Female = 1,
}

const isValidMicromole = (micromole: unknown): boolean =>
  typeof micromole === 'number' && micromole >= 10 && micromole <= 1000

const isValidAge = (age: unknown): boolean =>
  typeof age === 'number' && age >= 18 && age <= 150

function calculateLMRevised(gender: Gender, age: number, kreatinin: number) {
  if (gender === Gender.Female) {
    if (kreatinin < 150) {
      return Math.exp(
        2.56 -
          0.0642 +
          0.0121 * (150 - kreatinin) -
          0.0158 * age +
          0.438 * Math.log(age),
      )
    } else {
      return Math.exp(
        2.56 -
          0.0642 -
          0.926 * Math.log(kreatinin / 150) -
          0.0158 * age +
          0.438 * Math.log(age),
      )
    }
  }

  if (gender === Gender.Male) {
    if (kreatinin < 180) {
      return Math.exp(
        2.56 +
          0.00968 * (180 - kreatinin) -
          0.0158 * age +
          0.438 * Math.log(age),
      )
    } else {
      return Math.exp(
        2.56 -
          0.926 * Math.log(kreatinin / 180) -
          0.0158 * age +
          0.438 * Math.log(age),
      )
    }
  }

  throw new Error('Unhandled combination in Kreatinin Clearance')
}

function getCreatininClearance(age: number, kreatinin: number, gender: Gender) {
  if (!isValidAge(age)) {
    throw new Error('Invalid age for Kreatinin Clearance')
  }

  if (!isValidMicromole(kreatinin)) {
    throw new Error('Invalid kreatinin for Kreatinin Clearance')
  }

  if (typeof gender !== 'number') {
    throw new Error('Invalid gender for Kreatinin Clearance')
  }

  const result = calculateLMRevised(gender, age, kreatinin)
  return Math.round(result)
}

export {getCreatininClearance, isValidMicromole, isValidAge, Gender}
