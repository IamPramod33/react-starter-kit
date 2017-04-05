import React from 'react'

export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  /* Render Method */
  render() {
    return(
      <table className="table table-striped">
        <thead className="text-center">
          <tr>
            <th>Plugins</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>react-router</td>
            <td>Routing</td>
          </tr>
          <tr>
            <td>react-alert</td>
            <td>FOr showing Alerts</td>
          </tr>
        </tbody>
      </table>
    )
  }
}