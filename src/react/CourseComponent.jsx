import React from 'react'

export default class extends React.Component{
  
  constructor(props) {
    super(props);
  }

  /* Render Method */
  render() {
    return(
      <div className="row course-wrapper">
        <div className="col-xs-12"><label>Name</label><span>{this.props.data.name}</span></div>
        <div className="col-xs-12"><label>Duration</label><span>{this.props.data.duration}</span></div>
        <div className="col-xs-12"><label>Sections</label><span>{this.props.data.sections}</span></div>
        <div className="col-xs-12"><label>Summary</label><span>{this.props.data.summary}</span></div>
      </div>
    )
  }
}