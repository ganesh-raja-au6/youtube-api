import {SEARCH, FETCH} from '../actionTypes'

export const search = (search) => {
    return {
        type : SEARCH,
        payload : search
    }
}

export const fetchVideos = (data) => {
    return {
        type : FETCH,
        payload : data
    }
}