import {
  CONFIGURATION_SERVER_FETCH_FULFILLED, CONFIGURATION_SERVER_FETCH_REJECTED,
  GET_GETMENU, GET_AGILEINSTANTBYINDEX, GET_AGILEDOSSIERBYSTOCK,
  CONFIGURATION_CACHECLEAN_DELETE
  
} from '../actions/imipqr';

export const selectors = {
}

const initialState = {
  data:"",
  code:"",
  language:""
};

export default function reducer(state = initialState, action) {

  switch (action.type) {
    //EVENT
    case GET_ALLEVENT:
      return {
        ...state,
        data: [...state.data].filter((elem) => elem.language == action.language)
      };
    //MENU
    case GET_GETMENU:
      return {
        ...state,
        data: [...state.data].filter((elem) => elem.language == action.language)
      };
      //NEWS
      case GET_NEWSBYID:
        return {
            ...state,
            data: [...state.data].filter((elem) => elem.id == action.id)
        };
        case GET_ALLNEWS:
          return {
              ...state
          };
      //SERIES
    case GET_AGILEINSTANTBYINDEX:
      return {
        ...state
      };
    case GET_AGILEDOSSIERBYSTOCK:
      return {
        ...state,
        data: [...state.data].filter((elem) => elem.language == action.language && elem.code==action.code)
      };
////
    case CONFIGURATION_SERVER_FETCH_REJECTED:
      return {
        ...state,
        isFetching: false,
        fetchStatus: `errored: ${action.err}`
      };
    case CONFIGURATION_SERVER_FETCH_FULFILLED:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        fetchStatus: `Results from ${(new Date()).toLocaleString()}`,
        lastUpdate: action.lastUpdate
      };
      //DELETE
      case CONFIGURATION_CACHECLEAN_DELETE:
          return {
              ...state,
              data: [...state.data].filter((elem) => elem.id !== action.id)
          };
    default:
      return state;
  }

}
