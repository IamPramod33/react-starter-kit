import React from 'react'
export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {},
    this.editUserDetails = this.editUserDetails.bind(this);
  }
  
  editUserDetails() {
    this.props.setDetails(true);
  }

  /* Render Method */
  render() {
    return(
      <div className="profile-section">
        <h5 className="userinfo-header">User Details:</h5>
        <div className="userinfo-content">
          <div><label className="userinfo-label">Name: </label><span>{this.props.info.name}</span></div>
          <div><label className="userinfo-label">Place: </label><span>{this.props.info.place}</span></div>
          <div><label className="userinfo-label">Role: </label><span>{this.props.info.role}</span></div>
        </div>
        <div><button className="btn btn-default" onClick={this.editUserDetails}>Edit Details</button></div>
      </div>
    )
  }
}