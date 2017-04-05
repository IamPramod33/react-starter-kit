import React from 'react'
import CmpMethods from './methodsComponent'
import StaticList from './StaticListComponent'

export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      enableLC: false
    }
  }
  
  enableLifeCycle() {
    this.setState({
      enableLC: true
    })
  }

  enableComponentInfo() {
    this.setState({
      enableLC: false
    })
  }

  /* Render Method */
  render() {
    let reactIntro = "https://facebook.github.io/react/"
    let loadedComponent;
    if(this.state.enableLC) {
      loadedComponent = <div className="section-label">
        <button onClick={this.enableComponentInfo.bind(this)}>Back to Component</button>
        <CmpMethods />
      </div>
    } else {
      loadedComponent = <div className="section-label">
        <h5>A table Component</h5>
        <StaticList />
        <button onClick={this.enableLifeCycle.bind(this)}>Check LifeCycle</button>
      </div>
    }
    return(
      <div className="col-xs-12 react-section">
        <h5 className="section-label">Component : </h5>
        <div className="section-label">Using React.createClass()</div>
        <div className="section-label">Using React.Component{}</div>

        {loadedComponent}
      </div>
    )
  }
}