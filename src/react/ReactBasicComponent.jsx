import React from 'react'
import { browserHistory, Link } from 'react-router'
export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  /* Render Method */
  render() {
    return(
      <div className="col-xs-12 content-wrapper">
        <div className="col-xs-2">
          <ul className="react-topics">
            <li><Link to="/react/intro"> Documentation </Link></li>
            <li><Link to="/react/setup"> Setup </Link></li>
            <li><Link to="/react/render"> Rendering </Link></li>
            <li><Link to="/react/component"> Component </Link></li>
            <li><Link to="/react/props-state"> Props & State </Link></li>
            <li><Link to="/react/events"> Events </Link></li>
          </ul>
        </div>
        <div className="col-xs-10">
          {this.props.children}
        </div>
      </div>
    )
  }
}