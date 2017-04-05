import React from 'react'
import { browserHistory, Link } from 'react-router'

export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  /* Render Method */
  render() {
    let babelRef = "https://babeljs.io/repl";

    const section = { 
      "name": "JSX" 
    }

    const printName = (topic) => { 
      return topic.name 
    }

    const element = ( 
      <h4 className="jsx-info">Rendering {printName(section)} Element</h4> 
    )

    let status = true 
    let sessionStatus; 
    if(status) { 
      sessionStatus = <div>Status is true </div> 
    } else { 
      sessionStatus = <div>Status is false</div> 
    }

    return(
      <div className="col-xs-12 jsx-section">
        <div className="col-xs-12">Editor: <a target="_blank" href="https://babeljs.io/repl">{babelRef}</a></div>
        <div className="col-xs-12"><h5>What is JSX? </h5></div>
        <div className="col-xs-12">
          {element}
        </div>
        <div className="col-xs-12">
          {sessionStatus}
        </div>
      </div>
    )

  }
}
