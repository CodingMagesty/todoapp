export const displayToDos = (todos) => {
  return {
    type: 'CHANGE_TODOS_DISPLAY',
    todos
  }
}

export const changeAmountOfPages = (amountOfPages) => {
  return {
    type: 'CHANGE_AMOUNT_OF_PAGES',
    amountOfPages
  }
}

export const changePage = (page) => {
  return {
    type: 'CHANGE_PAGE',
    page
  }
}

export const calculatePages = (pages) => {
  let list = [];
  let counter = Math.ceil(pages / 3);
  let i = 1;
  while(i <= counter) {
    list.push(i);
    i += 1;
  }

  return {
    type: 'CALCULATE_PAGES',
    list
  }
}

export const changeFilter = (filter) => {
  console.log('CHANGE IS CALLED', filter);
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}

export const fetchData = () => (dispatch, getState) => {
fetch(`https://uxcandy.com/~shapoval/test-task-backend/?developer=Gleb&page=${getState().changePage}&sort_field=${getState().changeFilter}`)
  .then(result => result.json())
  .then(data => {
      dispatch(displayToDos(data.message.tasks));
      dispatch(calculatePages(data.message.total_task_count));
      dispatch(changeAmountOfPages(data.message.total_task_count));
  })
}
