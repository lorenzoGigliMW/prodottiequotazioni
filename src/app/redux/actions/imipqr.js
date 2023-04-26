//get
export const CONFIGURATION_SERVER_FETCH_FULFILLED = 'CONFIGURATION_SERVER_FETCH_FULFILLED';
export const CONFIGURATION_SERVER_FETCH_REJECTED = 'CONFIGURATION_SERVER_FETCH_REJECTED';
export const GET_GETMENU = 'GET_GETMENU';
export const GET_AGILEINSTANTBYINDEX = 'GET_AGILEINSTANTBYINDEX';
export const GET_AGILEDOSSIERBYSTOCK = 'GET_AGILEDOSSIERBYSTOCK';
export const CONFIGURATION_CACHECLEAN_DELETE = 'CONFIGURATION_CACHECLEAN_DELETE';
export const GET_ALLEVENT='GET_ALLEVENT';
export const GET_NEWSBYID='GET_NEWSBYID';
export const GET_ALLNEWS='GET_ALLNEWS';

export const actionTypes = {
  //GET
    CONFIGURATION_SERVER_FETCH_FULFILLED,
    CONFIGURATION_SERVER_FETCH_REJECTED,
    //EVENT
    GET_ALLEVENT,
    //MENU
    GET_GETMENU,
    //NEWS
    GET_NEWSBYID,
    GET_ALLNEWS,
//SERIES
    GET_AGILEINSTANTBYINDEX,
    GET_AGILEDOSSIERBYSTOCK,
    //delete
    CONFIGURATION_CACHECLEAN_DELETE
  };

// action creators
//get
export const  getGetMenu = () => ({
  type: GET_GETMENU
});
export const  getAllEvent = () => ({
  type: GET_ALLEVENT
});
export const  getNewsById = () => ({
  type: GET_NEWSBYID
});
export const  getAllNews = () => ({
  type: GET_ALLNEWS
});
export const  getAgileInstantByIndex = () => ({
  type: GET_AGILEINSTANTBYINDEX
});

export const  getAgileDossierByStock = () => ({
  type: GET_AGILEDOSSIERBYSTOCK
});

  export const configurationServerFetchFulfilled = (data, lastUpdate) => ({
    type: CONFIGURATION_SERVER_FETCH_FULFILLED,
    data: data,
    lastUpdate: lastUpdate
  });
  export const configurationServerFetchRejected = err => ({
    type: CONFIGURATION_SERVER_FETCH_REJECTED,
    err,
    error: true
  });
  //delete
  export const configurationCacheCleanDelete = () => ({
    type: CONFIGURATION_CACHECLEAN_DELETE
});

  export const actions = {
    getAllEvent,
    getGetMenu,
    getAllNews,
    getNewsById,
    getAgileInstantByIndex,
    getAgileDossierByStock,
    configurationServerFetchFulfilled,
    configurationServerFetchRejected,
    configurationCacheCleanDelete
  };
