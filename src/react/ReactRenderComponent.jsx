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

const elem = <div>this is from HTML </div>

export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  /* Render Method */
  render() {
    let el = "<div id='root'></div>";
    return(
      <div className="col-xs-12 react-section">
        <h5 className="section-label">Rendering in React </h5>
        <div className="section-label">
          <h5>
            index.html - {el}
          </h5>
          <h5>
            index.jsx - <i>ReactDom.render(element, document.getElementById('root'))</i>
          </h5>
          <h5>
            <i>element</i> can be either HTML or components
          </h5>
        </div>
        <div className="section-label">
          {elem}
          <App />
        </div>
      </div>
    )
  }
}