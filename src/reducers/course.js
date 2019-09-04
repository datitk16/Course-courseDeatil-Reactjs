import * as Types from './../constants/ActionTypes';

var initialState = [];


const courses = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.courses;
            return [...state];
       
        default: return [...state]
    }
}
export default courses;