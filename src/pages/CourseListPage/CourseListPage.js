import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCourseRequse } from './../../actions/index';
import Course from './../../components/Course';
import DeatilCourse from './../../components/DeatilCourse';
import CourseDetailPage from '../CourseDetailPage/CourseDetailPage';

class CourseListPage extends Component {

    componentDidMount() {
        this.props.AllCourse();
    }
  
    render() {
        var { courses } = this.props;
      
        return (
            <div>
                <Course>

                    {this.showCourse(courses)}
                    {this.showCourseDeatil(courses)}

                </Course>
              
               
            </div>
        );
    }
    showCourse=(courses)=>{
        var result=null;
        if(courses.length>0){
            

            result=courses.map((course,index)=>{
                return (
                    <DeatilCourse
                    key={index}
                    course={course}
                    index={index}   
                    />
                   
                )
            })
           
        }
        
        return result;
    }
    showCourseDeatil=(courses)=>{
        var result=null;
        if(courses.length>0){
            

            result=courses.map((course,index)=>{
                return (
                    <CourseDetailPage
                    key={index}
                    course={course}
                    index={index}   
                    />
                   
                )
            })
           
        }
        
        return result;
    }
}
const mapStateToProps = (state) => {
    return {
        courses: state.courses
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        AllCourse: () => {
            dispatch(actFetchCourseRequse())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);