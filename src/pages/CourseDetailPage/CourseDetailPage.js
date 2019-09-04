import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetDeailReques } from './../../actions/index';




class CourseDetailPage extends Component {

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.AllCourse(id);
          
        }
    }

    render() {
      console.log(this.props.coursesDetail)
      var {coursesDetail}=this.props;
       
        return (
            <div>
              <img src={coursesDetail.HinhAnh} />
              <div>{coursesDetail.TenKhoaHoc}</div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        coursesDetail: state.detailcourse


    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        AllCourse: (id) => {
            dispatch(actGetDeailReques(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailPage);