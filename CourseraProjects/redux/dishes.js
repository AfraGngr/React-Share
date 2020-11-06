import * as ActionTypes from "./ActionTypes";

export const dishes = (state = {
    isLoading : true,
    errMess: null,
    dishes: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
        return {...state, isLoading: false, errMess: null, }
    }
}