export const saveItem = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item))
}

export const getItem = (key) => {
  let restoredValue = JSON.parse(localStorage.getItem(key))
  if (restoredValue === 'false') {
    restoredValue = false
  } else if (restoredValue === 'true') {
    restoredValue = true
  }
  return restoredValue
}
