import { MONTH_AMOUNT } from '../constants/constans'

export const getMonthIndex = (date) => {
  if (date) {
    return new Date(date).getUTCMonth() + 1
  }
  return new Date().getUTCMonth() + 1
}

export const formatData = (data) => {
  const currentDate = new Date(data)
  return `${currentDate.getUTCDate()} ${currentDate.toLocaleString('default', {
    month: 'long',
  })}, ${currentDate.getUTCFullYear()} year`
}

export const getMonthIndexMap = () => {
  const currentMonth = getMonthIndex()
  const monthIndexMap = {}
  for (let i = 0; i < MONTH_AMOUNT; i += 1) {
    if (currentMonth + i <= 12) {
      monthIndexMap[currentMonth + i] = i
    } else {
      monthIndexMap[currentMonth + i - 12] = i
    }
  }
  return monthIndexMap
}

export const getIndexMonthStartingFromCurent = (monthIndex) => {
  const monthIndexMap = getMonthIndexMap()
  return monthIndexMap[monthIndex]
}
