import {getCentor} from '../centorkriterierna'

test('4 points', () => {
  const fields = {
    isFever: true,
    isTonsill: true,
    isCentorLgl: true,
    isCough: true,
  }
  const {points, message} = getCentor(fields)
  expect(points).toEqual(4)
  expect(message).toEqual('Antibiotika vid positivt snabbtest.')
})

test('3 points', () => {
  const fields = {
    isFever: true,
    isTonsill: true,
    isCentorLgl: true,
    isCough: false,
  }
  const {points, message} = getCentor(fields)
  expect(points).toEqual(3)
  expect(message).toEqual('Antibiotika vid positivt snabbtest.')
})

test('2 points', () => {
  const fields = {
    isFever: true,
    isTonsill: false,
    isCentorLgl: false,
    isCough: true,
  }
  const {points, message} = getCentor(fields)
  expect(points).toEqual(2)
  expect(message).toEqual('Inget snabbtest. Symtomatisk behandling vid behov.')
})

test('1 point', () => {
  const fields = {
    isFever: true,
    isTonsill: false,
    isCentorLgl: false,
    isCough: false,
  }
  const {points, message} = getCentor(fields)
  expect(points).toEqual(1)
  expect(message).toEqual('Inget snabbtest. Symtomatisk behandling vid behov.')
})

test('0 points', () => {
  const fields = {
    isFever: false,
    isTonsill: false,
    isCentorLgl: false,
    isCough: false,
  }
  const {points, message} = getCentor(fields)
  expect(points).toEqual(0)
  expect(message).toEqual('Inget snabbtest. Symtomatisk behandling vid behov.')
})
