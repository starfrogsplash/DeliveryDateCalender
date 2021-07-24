
import { getDaysInOrder } from '../utils/getDaysInOrder'

describe('valid number of days returned with correct start day of the week', () => {

  it('returns correct order of days for August 19, 2020', () => {
    const date = new Date('August 19, 2020').getTime();

    const result = getDaysInOrder(date)

    const expectedRowOfDays = [
      [0, 0, 0, 0, 0, 1, 2],
      [3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16],
      [17, 18, 19, 20, 21, 22, 23],
      [24, 25, 26, 27, 28, 29, 30],
      [31]]

    expect(result).toEqual(expectedRowOfDays)
  })

  it('returns correct order of days for February 19, 2020', () => {
    const date = new Date('February 19, 2020').getTime();
    const result = getDaysInOrder(date)

    const expectedRowOfDays = [
      [0, 0, 0, 0, 0, 1, 2],
      [3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16],
      [17, 18, 19, 20, 21, 22, 23],
      [24, 25, 26, 27, 28, 29]
    ]

    expect(result).toEqual(expectedRowOfDays)
  })
})