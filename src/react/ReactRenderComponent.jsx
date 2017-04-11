import React from 'react'

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function App() {
  return (
    <div>
      <Welcome name="A" />
      <Welcome name="B" />
      <Welcome name="C" />
    </div>
  );
}

const elem = <div>this line is an HTML render </div>

export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  /* Render Method */
  render() {
    let el = "<div id='app'></div>";
    let renderEl ="import { render } from 'react-dom'"
    return(
      <div className="col-xs-12 react-section">
        <h5 className="section-label">Rendering in React </h5>
        <div className="section-label">
          <h5>
            index.html - {el}
          </h5>
          <h5>
            index.jsx -
          </h5>
          <br />
          <span>import ReactDom from 'react-dom'</span><br/>
          <span><i>ReactDom.render(element, document.getElementById('app'))</i></span><br/><br/>
          <span>{renderEl}</span><br/>
          <span><i>render(element, document.getElementById('app'))</i></span>
          <h5>
            <br/><i>element</i> can be either an HTML semantic or components
          </h5>
        </div>
        <div className="section-label">
          {elem}
          <br/>
          <div>The below code is rendered through components </div>
          <App />
        </div>
      </div>
    )
  }
}