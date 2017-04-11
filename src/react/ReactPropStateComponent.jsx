import React from 'react'
import Course from './CourseComponent'
export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      courseObj : {}
    }
    this.changeCourse = this.changeCourse.bind(this);
  }
  
  componentWillMount() {
    this.setState({
      courseObj: {
        "name": "React",
        "duration": "1 day",
        "sections": "4-5",
        "summary": "React summary"
      }
    })
  }

  changeCourse () {
    this.setState({
      courseObj : {
        "name": "Redux",
        "duration": "2 days",
        "sections": "4-5",
        "summary": "Redux summary"
      }
    })
  }

  /* Render Method */
  render() {
    return(
      <div className="row prop-state-section">
        <div className="col-xs-6">
          <Course data={this.state.courseObj}/>
          <p className="clearfix"></p>
        </div>
        <div className="col-xs-12 btn-change">
          <button className="btn btn-default" onClick={this.changeCourse}>Change Course</button>
        </div>
      </div>
    )
  }
}