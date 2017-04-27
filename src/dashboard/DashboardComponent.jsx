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
        <h4>Topics</h4>
        <ul className="topics">
          <li><Link to="/intro">Why React JS? </Link></li>
          <li><Link to="/es6">JavaScript & ES6 in React </Link></li>
          <li><Link to="/jsx">JSX Intro </Link></li>
          <li><Link to="/react">React Concepts</Link></li>
        </ul>
        </div>
    )
  }
}