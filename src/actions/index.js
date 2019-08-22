
export const REQUEST_CONTENT = 'REQUEST_CONTENT';
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';
export const INCREMENT_REQUESTED = 'INCREMENT_REQUESTED';
export const INCREMENT = 'INCREMENT';
export const DECREMENT_REQUESTED = 'DECREMENT_REQUESTED';
export const DECREMENT = 'DECREMENT';
export const CHANGE_MONTHLY_SPEENDING = 'CHANGE_MONTHLY_SPEENDING';
export const CHANGE_MONTHLY_SPEENDING_REQUESTED = 'CHANGE_MONTHLY_SPEENDING_REQUESTED';
export const CHANGE_ANNUAL_SAVINGS = 'CHANGE_ANNUAL_SAVINGS';
export const CHANGE_ANNUAL_SAVINGS_REQUESTED = 'CHANGE_MONTHLY_SAVINGS_REQUESTED';

export const GET_PAGE_DATA = 'GET_PAGE_DATA';
export const REQUEST_PAGE_DATA = 'REQUEST_PAGE_DATA';
export const BASE_URL = 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/';

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const changeAnnualRange = (employeesRange) => ({
  type: CHANGE_ANNUAL_SAVINGS,
  employeesRange
})
export const changeMonthlyRange = (spendingRange) => ({
  type: CHANGE_MONTHLY_SPEENDING,
  spendingRange
})

export const increment = () => ({
  type: INCREMENT,
})

export const requestPosts = () => ({
  type: REQUEST_CONTENT,
});

export const receivedPosts = json => ({
  type: RECEIVE_CONTENT,
  pageData: json,
});

export const requestPage = () => ({
  type: REQUEST_PAGE_DATA,
});

export const receivedPage = json => ({
  type: GET_PAGE_DATA,
  menu: json.menu,
});

export function fetchContent(page) {
  return function (dispatch) {
    dispatch(requestPosts());
    return fetch(`${BASE_URL}${page}`)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedPosts(json));
      },
    );
  };
}

export function fetchPage(page) {
  return function (dispatch) {
    dispatch(requestPage());
    return fetch(`${BASE_URL}${page}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
          dispatch(receivedPage(json));
        },
      );
  };
}