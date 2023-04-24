//get
export const CONFIGURATION_SERVER_FETCH_FULFILLED = 'CONFIGURATION_SERVER_FETCH_FULFILLED';
export const CONFIGURATION_SERVER_FETCH_REJECTED = 'CONFIGURATION_SERVER_FETCH_REJECTED';
export const GET_GETMENU = 'GET_GETMENU';
export const GET_AGILEINSTANTBYINDEX = 'GET_AGILEINSTANTBYINDEX';
export const GET_AGILEDOSSIERBYSTOCK = 'GET_AGILEDOSSIERBYSTOCK';
export const CONFIGURATION_CACHECLEAN_DELETE = 'CONFIGURATION_CACHECLEAN_DELETE';


export const actionTypes = {
  //GET
    CONFIGURATION_SERVER_FETCH_FULFILLED,
    CONFIGURATION_SERVER_FETCH_REJECTED,
    GET_GETMENU,
    GET_AGILEINSTANTBYINDEX,
    GET_AGILEDOSSIERBYSTOCK,
    //POST
    CONFIGURATION_CACHECLEAN_DELETE
  };

// action creators
//get
export const  getGetMenu = () => ({
  type: GET_GETMENU
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
    getGetMenu,
    getAgileInstantByIndex,
    getAgileDossierByStock,
    configurationServerFetchFulfilled,
    configurationServerFetchRejected,
    configurationCacheCleanDelete
  };
