import React from 'react'
export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.info.name,
      place: this.props.info.place,
      role: this.props.info.role
    }
    this.updateUserDetails = this.updateUserDetails.bind(this);
  }

  handleChange(field, e) {
    this.setState({
      [field]: e.target.value
    })
    this.props.info[field] = e.target.value
  }

  updateUserDetails() {
    this.props.setDetails(false);
  }

  /* Render Method */
  render() {
    return(
      <div className="profile-section">
        <h5 className="userinfo-header">Edit User Details:</h5>
        <form className="form-group userinfo-content">
          <div><label className="userinfo-label">Name: </label><input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this,'name')}/></div> 
          <div><label className="userinfo-label">Place: </label><input type="text" name="place" value={this.state.place} onChange={this.handleChange.bind(this,'place')}/></div> 
          <div><label className="userinfo-label">Role: </label><input type="text" name="role" value={this.state.role} onChange={this.handleChange.bind(this,'role')}/></div> 
        </form>
        <div><button className="btn btn-default" onClick={this.updateUserDetails}>Update Details</button></div>
      </div>
    )
  }
}