import { REQUEST_CONTENT, RECEIVE_CONTENT, REQUEST_PAGE_DATA, GET_PAGE_DATA,
  INCREMENT_REQUESTED, INCREMENT, DECREMENT_REQUESTED, DECREMENT, CHANGE_MONTHLY_SPEENDING,
  CHANGE_MONTHLY_SPEENDING_REQUESTED, CHANGE_ANNUAL_SAVINGS, CHANGE_ANNUAL_SAVINGS_REQUESTED } from '../actions';

const initialState = {
  currentPage: 0,
  spendingRange: 0,
  employeesRange: 0,
  monthlySpending: 0,
  annualSavings: 0,
  isIncrementing: false,
  isDecrementing: false,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CONTENT:
      return { ...state, loading: true };
    case RECEIVE_CONTENT:
      return { ...state, pageData: action.pageData, loading: false };
    case REQUEST_PAGE_DATA:
      return { ...state, loading: true };
    case GET_PAGE_DATA:
      return { ...state, menu: action.menu, loading: false };
    case INCREMENT_REQUESTED:
      return {...state, isIncrementing: true};
    case INCREMENT:
      return {...state, currentPage: state.currentPage + 1, isIncrementing: !state.isIncrementing};
    case DECREMENT_REQUESTED:
      return {...state, isDecrementing: true};
    case DECREMENT:
      return {...state, currentPage: state.currentPage - 1, isDecrementing: !state.isDecrementing};
    case CHANGE_MONTHLY_SPEENDING_REQUESTED:
      return {...state, isDecrementing: true};
    case CHANGE_MONTHLY_SPEENDING:
      return {...state, spendingRange: action.spendingRange, monthlySpending: parseFloat(action.spendingRange) * 0.3, isDecrementing: !state.isDecrementing};
    case CHANGE_ANNUAL_SAVINGS_REQUESTED:
      return {...state, isDecrementing: true};
    case CHANGE_ANNUAL_SAVINGS:
      return {...state, employeesRange: action.employeesRange, isDecrementing: !state.isDecrementing};
    default:
      return state;
  }
};

export default reducer;
