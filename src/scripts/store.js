import {createStore, combineReducers} from 'redux'
import React from 'react'

const initialState = {
    root: {message: "hi!"}
};

const SET_MESSAGE = 'SET_MESSAGE';
export const FINISH_INITIAL_LOADING = 'FINISH_INITIAL_LOADING';

export class ReducerRoot extends React.Component
{
    static SetMessage(data)
    {
        return {
            type: SET_MESSAGE,
            data: data
        }
    }

    static Reducer(state = {}, action)
    {
        switch (action.type)
        {
            case FINISH_INITIAL_LOADING:
                return Object.assign({}, state, {initialLoading: false});
            case SET_MESSAGE:
                return Object.assign({}, state, {message: action.data});
            case 'SET_ONLINE':
                return Object.assign({}, state, {offline: undefined});
            default:
                return state
        }
    }
}

const reducers = combineReducers(
    {
        root: ReducerRoot.Reducer
    });

const store = createStore(reducers, initialState);
export default store;
