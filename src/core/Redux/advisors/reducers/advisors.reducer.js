import {
    ADVISOR,
    ADVISOR_FAIL,
    ADVISOR_SUCCESS
} from '../actions/advisors.actions';

const initialState = {
  loading: false,
  loaded: false,
  data: null,
  error: null
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {

      case ADVISOR:
          return {
              ...state,
              loading: true,
              loaded: false,
              data: null,
              error: null,
          };

      case ADVISOR_SUCCESS:
          return {
              ...state,
              loading: false,
              loaded: true,
              error: null,
              data: action.data
          };

      case ADVISOR_FAIL:
          return {
              ...state,
              loading: false,
              loaded: true,
              data: null,
              error: action.ex
          };

    default:
      return state
  }
}
