import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: null,
    playlists: [],
    top_artists: null,
    discover_weekly: null,
    playing: false,
    item: null,
    repeat: null,
    volume: 0,
    shuffle: null,
    token: null,
}

const AppReducer = (state = initialState, action: any) => {
     if(action.type === actionTypes.SET_USER){
         return {
             ...state,
            user: action.user
         }
     }

     if(action.type === actionTypes.SET_TOKEN){
        return {
            ...state,
           token: action.token
        }
    }

    if(action.type === actionTypes.SET_PLAYLISTS){
        return {
            ...state,
            playlists: action.playlists.items
        }
    }

    if(action.type === actionTypes.SET_DISCOVER_WEEKLY){
        return {
            ...state,
            discover_weekly: action.discover_weekly
        }
    }

    if(action.type === actionTypes.SET_TOP_ARTIST){
        return {
            ...state,
            top_artists: action.top_artists
        }
    }

    if(action.type === actionTypes.SET_PLAYING){
        return {
            ...state,
            playing: action.playing
        }
    }

    if(action.type === actionTypes.SET_ITEM){
        return {
            ...state,
            item: action.item
        }
    }

    
    if(action.type === actionTypes.SET_SHUFFLE){
        return {
            ...state,
            shuffle: action.shuffle
        }
    }

    if(action.type === actionTypes.SET_REPEAT){
        return {
            ...state,
            repeat: action.repeat
        }
    }

    if(action.type === actionTypes.SET_VOLUME){
        return {
            ...state,
            volume: action.volume
        }
    }

    return  state;
}

export default AppReducer;