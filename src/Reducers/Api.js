export function displayToDos(state = [], action) {
  if (action.type === 'CHANGE_TODOS_DISPLAY') {
    return action.todos;
  }
  return state;
}

export function changeAmountOfPages(state = 0, action) {
  if (action.type === 'CHANGE_AMOUNT_OF_PAGES') {
    return action.amountOfPages;
  }

  return state;
}

export function calculatePages(state = [], action) {
  if (action.type === 'CALCULATE_PAGES') {
    return action.list;
  }

  return state;
}

export function changeFilter(state='id', action) {
  if (action.type === 'CHANGE_FILTER') {
    return action.filter;
  }

  return state;
}

export function changePage(state = 1, action) {
  if (action.type === 'CHANGE_PAGE') {
    return action.page;
  }

  return state;
}
