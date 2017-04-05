import React from 'react'
import { browserHistory } from 'react-router'
import logo from './logo.svg';
import './css/styles.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css';
import Home from './common/HomeComponent'

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  /* Render Method */
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 app">
          <div className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h2>React JS<span className="pull-left"><Home /></span></h2>
          </div>
        </div>
        <div className="col-xs-12"> 
          {this.props.children}
        </div>
      </div>
    )
  }
}

