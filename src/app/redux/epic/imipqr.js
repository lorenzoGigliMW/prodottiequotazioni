import { mergeMap } from 'rxjs/operators';
import { from, of, catchError, map } from 'rxjs';
import axios from 'axios';
import { combineEpics } from 'redux-observable';
import {
    GET_ALLEVENT,
    GET_GETMENU,
    GET_NEWSBYID, GET_ALLNEWS,
    GET_AGILEINSTANTBYINDEX, GET_AGILEDOSSIERBYSTOCK,
    CONFIGURATION_CACHECLEAN_DELETE
} from '../actions/imipqr';
import { ofType } from 'redux-observable';

const provaEpic = action$ => action$.pipe(
    ofType(GET_GETMENU),
    mergeMap(action => from(axios.get('https://peq.marketwall.test/rest/menu/getmenu?language=' + action.language)).pipe(
        map(response => {
            return configurationServerFetchFulfilled(response.data)
        }),
        catchError(err => of(configurationServerFetchRejected(err.message))))),
    ofType(GET_AGILEINSTANTBYINDEX),
    mergeMap(action => from(axios.get('https://peq.marketwall.test/rest/agileinstantbyindex?menuId=$menuId&page=$page&pageSize=$pageSize')).pipe(
        map(response => {
            return configurationServerFetchFulfilled(response.data)
        }),
        catchError(err => of(configurationServerFetchRejected(err.message))))),
    ofType(GET_AGILEDOSSIERBYSTOCK),
    mergeMap(action => from(axios.get('https://peq.marketwall.test/rest/agiledossierbystock?code=' + action.code + 'language=' + action.language)).pipe(
        map(response => {
            return configurationServerFetchFulfilled(response.data)
        }),
        catchError(err => of(configurationServerFetchRejected(err.message))))),
    ofType(CONFIGURATION_CACHECLEAN_DELETE),
    mergeMap(action => from(axios.delete('https://peq.marketwall.test/rest/del')).pipe(
        map(response => configurationServerFetch(response.data)),
        catchError(err => of(configurationServerFetchRejected(err.message))))),
    ofType(GET_ALLEVENT),
    mergeMap(action => from(axios.get('https://peq.marketwall.test/rest/events/getallevents?language=' + action.language)).pipe(
        map(response => {
            return configurationServerFetchFulfilled(response.data)
        }),
        catchError(err => of(configurationServerFetchRejected(err.message))))),
    ofType(GET_NEWSBYID),
    mergeMap(action => from(axios.get('https://peq.marketwall.test/rest/news/getnewsbyid?id=' + action.id)).pipe(
        map(response => {
            return configurationServerFetchFulfilled(response.data)
        }),
        catchError(err => of(configurationServerFetchRejected(err.message))))),
    ofType(GET_ALLNEWS),
    mergeMap(action => from(axios.get('https://peq.marketwall.test/rest/news/getnewsbyid')).pipe(
        map(response => {
            return configurationServerFetchFulfilled(response.data)
        }),
        catchError(err => of(configurationServerFetchRejected(err.message))))),

)


const Epics = combineEpics(provaEpic);
export default Epics;
