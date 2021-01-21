import React, { Component } from 'react'
import { Route, Switch, } from "react-router-dom";
import { withRouter } from 'react-router'
import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";
import Index from './components/Charts/Index';



loadProgressBar();

class App extends Component {
  render() {
    return (
      <>
        {/* <NavBar /> */}
        <Switch>
          <Route path="/" exact component={Index} />
        </Switch>
      </>
    )
  }
}
export default withRouter(App);