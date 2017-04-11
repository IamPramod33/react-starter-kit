import React from 'react'
import Profile from './ProfileInfoComponent'
import EditProfile from './EditProfileComponent'
export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      userObj: {}
    }
  }

  componentWillMount() {
    this.setState({
      userObj : {
        "name": "React User",
        "place": "Github",
        "role": "Standard User"
      }
    })
  }

  updateUserInfo (status) {
    this.setState({
      isEditable: status
    })
  }

  /* Render Method */
  render() {
    let profileCmp, submitCmp;
    if(this.state.isEditable) {
      profileCmp = <EditProfile info={this.state.userObj} setDetails={this.updateUserInfo.bind(this)} />
    } else{
      profileCmp = <Profile info={this.state.userObj} setDetails={this.updateUserInfo.bind(this)}/>
    }
    return(
      <div className="col-xs-12 react-section">
        <h5 className="section-label">
          Profile Section: 
        </h5>
        <div className="form-info">
          {profileCmp}
        </div>
      </div>
    )
  }
}