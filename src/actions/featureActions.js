// REMOVE_FEATURE
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = item => {
  return {
    type: REMOVE_FEATURE,
    payload: item
  }
}
// ADD_FEATURE
export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = item => {
  return {
    type: ADD_FEATURE,
    payload: item
  }
}

// NEW_TOTAL
export const NEW_TOTAL = 'NEW_TOTAL';

export const newTotal = total => {
  return {
    type: NEW_TOTAL,
    payload: total
  }
}
