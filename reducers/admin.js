import {ADMIN} from "../actions/types";

const initialState={};

export default function currentUser(state=initialState,action) {

    switch(action.type){
        case ADMIN:
            return action.payload;
        default:
            return state
    }
}