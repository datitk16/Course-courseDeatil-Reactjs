import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



//khóa học Item
class DeatilCourse extends Component {
    render() {

        var { course, index } = this.props;

        // console.log(course)
        return (
            <div>
                <div className="col-md-3">
                    <div>{index}</div>
                    <img src={course.HinhAnh} />
                    {/* <NavLink to={`/course/${course.MaKhoaHoc}`}>
                        <h1>{course.TenKhoaHoc}</h1>
                    </NavLink> */}
                    <NavLink to={`/chitiet/${course.MaKhoaHoc}`}>
                        <h1>{course.TenKhoaHoc}</h1>
                    </NavLink>


                </div>
            </div>
        );
    }
}

export default DeatilCourse;