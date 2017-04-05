import React from 'react'

export default class extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  /* Render Method */
  render() {
    let setupLink = "https://stanko.github.io/setting-up-webpack-babel-and-react-from-scratch/";
    return(
      <div className="col-xs-12 react-section">
          <h5 className="section-label">Setup :</h5>
          <div className="section-label">
            <h5>Reference - <a href={setupLink}>
              {setupLink}
            </a></h5>
          </div>
          <div className="section-label">
            <h5>Webpack - Configuration Tool</h5>
            <h5>Babel - Transpiler</h5>
          </div>
          <div className="section-label">
            <h5>Configuration Steps</h5>
            <ul>
              <li>Adding dependencies and devDependencies in package.json</li>
              <li>Setting scripts in package.json to run commands </li>
              <li>Configure Entry / Output in webpack.config.js</li>
              <li>Add Module Loaders / Plugins and other requirements in webpack.config.js</li>
              <li>Production configurations can be configured in webpack.config.js</li>
            </ul>
          </div>
      </div>
    )
  }
}