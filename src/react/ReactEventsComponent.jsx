import React from 'react'

export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      sampleField: "",
      fieldLabel: ""
    }
    this.handleUserName = this.handleUserName.bind(this)
    this.handleSampleField = this.handleSampleField.bind(this)
  }
  
  handleUserName(e, field) {
    this.setState({
      userName: e.target.value,
      fieldLabel: field
    })
  }

  handleSampleField(e) {
    this.setState({
      sampleField: e.target.value
    })
  }

  /* Render Method */
  render() {
    return(
      <div className="col-xs-12 event-section">
        <div className="col-xs-12">
          <label>Some text</label>
          <input type="text" value={this.state.sampleField} onChange={(e) => this.handleSampleField(e)} />
          <span>Event without arguments</span>
        </div>
        <div className="col-xs-12">
          <label>Username: </label>
          <input type="text" value={this.state.userName} onChange={(e, field) => this.handleUserName(e, "username")} />
          <span>Event with arguments <b>{this.state.fieldLabel}</b></span>
        </div>
      </div>
    )
  }
}