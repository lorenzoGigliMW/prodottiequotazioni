import {
  CONFIGURATION_SERVER_FETCH_FULFILLED, CONFIGURATION_SERVER_FETCH_REJECTED,
  GET_GETMENU, GET_AGILEINSTANTBYINDEX, GET_AGILEDOSSIERBYSTOCK,
  CONFIGURATION_CACHECLEAN_DELETE
  
} from '../actions/imipqr';

export const selectors = {
}

const initialState = {
};

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case GET_GETMENU:
      return {
        ...state
      };
    case GET_AGILEINSTANTBYINDEX:
      return {
        ...state
      };
    case GET_AGILEDOSSIERBYSTOCK:
      return {
        ...state
      };

    case CONFIGURATION_SERVER_FETCH_REJECTED:
      return {
        ...state,
        isFetching: false,
        fetchStatus: `errored: ${action.err}`
      };
    case CONFIGURATION_SERVER_FETCH_FULFILLED:
      return {
        ...state,
        tasks: action.data,
        isFetching: false,
        fetchStatus: `Results from ${(new Date()).toLocaleString()}`,
        lastUpdate: action.lastUpdate
      };
      case CONFIGURATION_CACHECLEAN_DELETE:
          return {
              ...state,
              tasks: [...state.tasks].filter((elem) => elem.id !== action.id)
          };
    default:
      return state;
  }

}
