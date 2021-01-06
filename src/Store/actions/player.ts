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

export const setTopArtist = (top_artists: any) =>{
    return {
        type: actionTypes.SET_TOP_ARTIST, 
        top_artists: _.cloneDeep(top_artists)
    }
}

export const setPlaying = (playing: boolean) => {
    return {
        type: actionTypes.SET_PLAYING,
        playing: playing,
    }
}

export const setItem = (item: any) => {
    return {
        type: actionTypes.SET_ITEM,
        item: _.cloneDeep(item)
    }
}