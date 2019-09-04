import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';



export const actFetchCourseRequse = () => {
    return dispatch => {
        return callApi('DanhSachKhoaHoc', 'GET', null).then(res => {
            dispatch(actFetchCourse(res.data))
        })
    }
}
export const actFetchCourse = (courses) => {
    return {
        type: Types.FETCH_PRODUCTS,
        courses
    }
}



export const actGetDeailReques=(maKH)=>{
    return dispatch => {
        return callApi(`ChiTietKhoaHoc/${maKH}`, 'GET', null).then(res => {
            dispatch(actGetDeail(res.data));
        });
    }
}
export const actGetDeail = (courseDetail) => {
    return {
        type : Types.GET_DETAIL,
        courseDetail
    }
}