import React from 'react'
import { render } from 'react-dom'
import Dashboard from './dashboard/DashboardComponent'
import Jsx_Comp from './jsx-info/jsxComponent'
import Intro from './intro/IntroComponent'
import Es6_Comp from './es6/Es6ExamplesComponent'
import React_Basic from './react/ReactBasicComponent'
import React_Intro from './react/ReactIntroComponent'
import React_Setup from './react/ReactSetupComponent'
import React_Render from './react/ReactRenderComponent'
import React_Cmp from './react/ReactCmpComponent'
import React_Events from './react/ReactEventsComponent'
import React_Forms from './react/ReactFormsComponent'
import React_PropState from './react/ReactPropStateComponent'
import React_Table from './react/ReactRecordsTable'
import App from './App'
import { Router, Route, browserHistory,IndexRoute } from 'react-router'


render(<Router history={browserHistory}>
  <Route path="/" component={App} >
    <IndexRoute component={Dashboard}/>
    <Route path="/dashboard" component={Dashboard}></Route>
    <Route path="/intro" component={Intro}></Route>
    <Route path="/jsx" component={Jsx_Comp}></Route>
    <Route path="/es6" component={Es6_Comp}></Route>
    <Route path="/react" component={React_Basic}>
    	<IndexRoute component={React_Intro}/>
    	<Route path="/react/intro" component={React_Intro}></Route>
    	<Route path="/react/setup" component={React_Setup}></Route>
        <Route path="/react/render" component={React_Render}></Route>
        <Route path="/react/component" component={React_Cmp}></Route>
        <Route path="/react/props-state" component={React_PropState}></Route>
    	<Route path="/react/events" component={React_Events}></Route>
        <Route path="/react/forms" component={React_Forms}></Route>
    	<Route path="/react/tables" component={React_Table}></Route>
    </Route>
  </Route>
</Router>, document.getElementById('app'))