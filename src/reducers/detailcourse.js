import * as Types from './../constants/ActionTypes';

var initialState = [];


const detailcourse = (state = initialState, action) => {
  
    switch (action.type) {
        
        case Types.GET_DETAIL:
            state = action.courseDetail;
            return state;
        default: return state;
    }
}
export default detailcourse;