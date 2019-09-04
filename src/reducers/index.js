
import {combineReducers} from 'redux';
import courses from './course';
import detailcourse from './detailcourse';

const appReducer=combineReducers({
   courses,
   detailcourse
})
export default appReducer;