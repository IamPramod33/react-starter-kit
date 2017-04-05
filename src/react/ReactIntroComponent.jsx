import React from 'react'
import Fav from '../favicon.ico'

export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  /* Render Method */
  render() {
    let reactIntro = "https://facebook.github.io/react/"
    let reactGit = "https://github.com/facebook/react"
    let reactExamples = "https://github.com/facebook/react/wiki/Examples"
    let rangeExamples = "https://rangle-io.gitbooks.io/react-training/content"
    return(
      <div className="col-xs-12 react-section">
        <h5 className="section-label">
          References: 
        </h5>
        <div className="documentation-info">
          <h5><a target="_blank" href={reactIntro}>{reactIntro}</a> &nbsp; <img className="react-font-icon" src={Fav}/></h5>
          <h5><a target="_blank" href={reactGit}>{reactGit}</a> &nbsp; <i className="fa fa-github"></i></h5>
          <h5><a target="_blank" href={reactExamples}>{reactExamples}</a> &nbsp; <i className="fa fa-github"></i></h5>
          <h5><a target="_blank" href={rangeExamples}>{rangeExamples}</a> &nbsp; <i className="fa fa-github"></i></h5>
        </div>
      </div>
    )
  }
}