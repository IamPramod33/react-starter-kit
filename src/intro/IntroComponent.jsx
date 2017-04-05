import React from 'react'

export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  /* Render Method */
  render() {
    return(
      <div className="col-xs-12 content-wrapper">
        <div className="col-xs-12">
          <ul className="topics">
            <li>Javascript seemed to be easier after using it in React</li>
            <li>Components</li>
            <li>Flexibility at design</li>
            <li>Virtual DOM</li>
          </ul>
        </div>
      </div>
    )
  }
}