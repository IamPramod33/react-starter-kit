import React from 'react'

export default class extends React.Component{
  
  constructor(props) {
    super(props);
  }
  
  /* Render Method */
  render() {
    return(
      <div className="col-xs-12 content-wrapper">
        <h5 className="section-label">Es6 Concepts and examples</h5>
        <div className="js-examples">
          <div><span>Classes -</span><a>https://jsfiddle.net/dwahlin/o93Lm0rc/</a></div>
          <div><span>const, let, promise -</span><a>https://jsfiddle.net/jpsierens/5g0d0ww7/9/</a></div>
          <div>
            <h6>Some more Examples:</h6>
            <div><a>http://jsfiddle.net/andyjmeyers/f88rv6mp/</a></div>
            <div><a>http://jsfiddle.net/andyjmeyers/so6qdum5/</a></div>
            <div><a></a></div>
          </div>
        </div>
      </div>
    )
  }
}