import React from 'react'
import Fav from '../favicon.ico'
import update from 'react-addons-update';

export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      recordsData: [],
      userName: '',
      location: '',
      contact: ''
    }
  }
  
  handleClick() {

  }

  editUser(item, index) {
    var newState = React.addons.update(this.state, {
      userName: item.userName,
      location: item.location,
      contact: item.contact,
      editIndex: index,
      editMode: true
    });
    this.setState(newState);
  }

  updateRecord(event) {
    if(this.state.editMode) {
      let items = this.state.recordsData.map((list,index) => {
        if(this.state.editIndex === index) {
          list.userName = this.state.userName,
          list.location = this.state.location,
          list.contact = this.state.contact
        }
        this.setState({
          recordsData: items,
          userName: '',
          location: '',
          contact: '' 
        })
      })
    } else {
      let items = this.state.recordsData.concat({
        userName: this.state.userName,
        location: this.state.location,
        contact: this.state.contact
      })
      this.setState({
        recordsData: items,
        userName: '',
        location: '',
        contact: '' 
      })
    }
    event.preventDefault()
  }

  handleChange(event) {
    var newState = React.addons.update(this.state, {
      [event.target.name]: event.target.value
    });
    this.setState(newState)
  }

  componentDidMount() {

  }

  /* Render Method */
  render() {
    let options, recordsTable, actionButton;
    options = this.state.recordsData.map((list,index) => {
      return (
        <tr key={index}>
          <td>
            <input onClick={this.handleClick} type="checkbox" name={list.userName} />
          </td>
          <td>{list.userName}</td>
          <td>{list.location}</td>
          <td>{list.contact}</td>
          <td><span className="fa fa-pencil-square-o" onClick={this.editUser.bind(this, list, index)}></span></td>
        </tr>
      );
    })

    if(this.state.recordsData.length>0){
      recordsTable = <div>
        <h5 className="section-label">
          Manage User Records: 
        </h5>
        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Location</th>
              <th>Contact</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {options}
          </tbody>
        </table>
      </div>
    } else {
      recordsTable = <div className="text-left">No Records Found</div>
    }
    
    if(this.state.editMode) {
      actionButton = <button type="submit" className="btn btn-default btn-create">Update</button>
    } else {
      actionButton = <button type="submit" className="btn btn-default btn-create">Create</button>
    }
    return(
      <div className="col-xs-6 react-section">
        <div className="records-section-wrapper">
          <form className="create-record" onSubmit={this.updateRecord.bind(this)}>
            <h5 className="section-label">Create a record: </h5>
            <div>
              <label>Name </label><input type="text" value={this.state.userName} name="userName" onChange={this.handleChange.bind(this)}/>
            </div>
            <div>
              <label>Location </label><input type="text" value={this.state.location} name="location" onChange={this.handleChange.bind(this)}/>
            </div>
            <div>
              <label>Contact </label><input type="text" value={this.state.contact} name="contact" onChange={this.handleChange.bind(this)}/>
            </div>
            {actionButton}
          </form>
          {recordsTable}
        </div>
      </div>
    )
  }
}