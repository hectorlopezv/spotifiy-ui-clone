import * as actionTypes from './actionTypes';
import * as _ from 'lodash';

export const setUser = (user: any) =>{
    return {
        type: actionTypes.SET_USER, 
        user: _.cloneDeep(user)
    }
}

export const setToken = (token: any) =>{
    return {
        type: actionTypes.SET_TOKEN, 
        token: _.cloneDeep(token)
    }
}

export const setPlaylists = (playlists: any) =>{
    return {
        type: actionTypes.SET_PLAYLISTS, 
        playlists: _.cloneDeep(playlists)
    }
}

export const setDiscoverWeekly = (weekly_playlists: any) =>{
    return {
        type: actionTypes.SET_DISCOVER_WEEKLY, 
        discover_weekly: _.cloneDeep(weekly_playlists)
    }
}