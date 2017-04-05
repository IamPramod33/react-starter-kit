import React from 'react'

export default class extends React.Component{
  
  constructor(props) {
    super(props);
    alert("In Constructor");
    this.state = {
      count: 0
    }
  }
  
  componentWillMount() {
    alert("In Will Mount");
  }

  increment() {
    this.setState({
      count: this.state.count+1
    })
  }

  /* Render Method */
  render() {
    let reactIntro = "https://facebook.github.io/react/"
    return(
      <div className="col-xs-12 life-cycle-section">
        <div className="col-xs-8">
          <h5 className="section-label">LifeCycle:</h5>
          <h5 className="section-label">Mounting:</h5>
          <ul>
            <li>constructor()</li>
            <li>componentWillMount()</li>
            <li>render()</li>
            <li>componentDidMount()</li>
          </ul>
          <h5 className="section-label">Updating:</h5>
          <ul>
            <li>componentWillReceiveProps()</li>
            <li>shouldComponentUpdate()</li>
            <li>componentWillUpdate()</li>
            <li>render()</li>
            <li>componentDidUpdate()</li>
          </ul>
          <h5 className="section-label">Unmounting:</h5>
          <ul>
            <li>componentWillUnmount()</li>
          </ul>
        </div>
        <div className="col-xs-4">
          <div className="section-label">
            <h5>Count: <span>{this.state.count}</span></h5>
          </div>
          <button onClick={this.increment.bind(this)}>+</button>
        </div>
      </div>
    )
  }

  componentDidMount() {
    alert("In Did Mount");
  }

  componentWillReceiveProps() {
    alert("In will receive props");
  }

  shouldComponentUpdate() {
    alert("In should update");
    return false;
  }

  componentWillUpdate() {
    alert("In Will Update");
  }

  componentDidUpdate() {
    alert("In Did Update");
  }

  componentWillUnmount() {
    alert("In Will UnMount");
  }

}




