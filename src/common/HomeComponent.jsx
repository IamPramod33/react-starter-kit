import React from 'react'
import { Link } from 'react-router'

export default class extends React.Component{
  
  constructor(props) {
    super(props);
  }
  
  /* Render Method */
  render() {
    return(
      <span className="home-redirection"><Link to="/dashboard"> <i className="fa fa-home home-icon fa-2x"></i></Link></span>
    )
  }
}
