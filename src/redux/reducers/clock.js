import {UPDATE_CLOCK} from '../types'

const initialState = {
}

export default (state = initialState, action)=>{
    switch(action.type){
        case UPDATE_CLOCK:
            return {
                ...state,
                time: action.payload
            }
        default: return state
    }
}